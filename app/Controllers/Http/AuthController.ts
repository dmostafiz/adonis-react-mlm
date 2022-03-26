import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {

    public async register({ request, response, session }: HttpContextContract) {
        // validate email

        const reqBody = request.body()

        // return console.log(reqBody.fName)

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

        if (reqBody.ref_id) {
            user.parent_id = reqBody.ref_id
            await user.save()
        }

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
