import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import Level from 'App/Models/Level'
import Package from 'App/Models/Package'
import Registration from 'App/Models/Registration'
import User from 'App/Models/User'

export default class AuthController {

    public async register({ request, response, session }: HttpContextContract) {
        // validate email

        const reqBody = request.body()

        // return console.log('reqBody.ref_id: ', reqBody.ref_id)

        // try {
        const validations = schema.create({
            first_name: schema.string({}),
            last_name: schema.string({}),
            email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
            password: schema.string({})
        })

        const validationData = await request.validate({
            schema: validations,
            messages: {
                required: 'This field is required',
                email: 'Please enter a valid email',
            },
        })

        const user = await User.create(validationData)

        const dateNow = Date.now().toString()
        const refId = dateNow.slice(dateNow.length - 6)
        // console.log('Ref ID: ', refId)

        user.ref_id = refId
        await user.save()

        user.package_id = await getStarterPackageOrCreate()
        await user.save()

        async function getStarterPackageOrCreate() {
            const pkg: any = await Package.query().first() || await Package.create({
                package: 'Starter package',
            })
            return pkg.id
        }

        if (reqBody.ref_id) {

            const parent = await User.findBy('ref_id', reqBody.ref_id)

            if (parent) {
                user.parent_id = parent.id
                await user.save()

                const reg = new Registration()
                reg.user_id = parent.id
                reg.child_id = user.id
                await reg.save()


            }

        }

        if(reqBody.source){
            user.source = reqBody.source
            await user.save()
        }


        async function getParentAndUpdateLevel(parentUser: any, maxDepth: number, currentDepth: number = 0) {
            
            var nextDepth = ++currentDepth;

            if (maxDepth >= currentDepth) {

                if (parentUser.parent_id !== null) {
                    const prnt: any = await User.findBy('id', parentUser.parent_id)

                    const level = new Level()
                    level.user_id = prnt.id
                    level.level = currentDepth
                    level.child_id = parentUser.id
                    await level.save()

                    await getParentAndUpdateLevel(prnt, maxDepth, nextDepth)
                }

            }
        }

        const maxDepth = 7
        await getParentAndUpdateLevel(user, maxDepth)


        console.log('Registration success')

        session.flash('success', 'Registration success. You may now login to your account with your credential.')

        return response.redirect('/auth/login')

        // } catch (error) {
        //     console.log('Error Ocured: ', error.message)
        //     return response.redirect('/auth/join_now')

        // }

    }


    public async login({ auth, request, response }: HttpContextContract) {
        const loginSchema = schema.create({
            email: schema.string({ trim: true }, [rules.email()]),
            password: schema.string(),
        });

        const { email, password } = await request.validate({
            schema: loginSchema,
            messages: {
                required: 'This field is required',
                email: 'Please enter a valid email',
            },
        });

        const user = await auth.use('web').attempt(email, password);

        console.log('Auth User: ', user.isadmin)

        response.redirect(`/${user.isadmin ? 'admin' : 'user'}/dashboard`);
    }

    //   logout function
    public async logout({ auth, response, session }: HttpContextContract) {

        await auth.logout()
        // session.forget('adonis-session')
        session.flash('info', 'You have logged out from your account')
        response.redirect('/auth/login');
    }


}
