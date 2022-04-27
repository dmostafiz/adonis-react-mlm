import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GetGeneology from 'App/Helpers/GetGeneology'
import GetLevels from 'App/Helpers/GetLevels'
import Package from 'App/Models/Package'
import User from 'App/Models/User'

export default class UsersController {

    async getUserProfile({ request, inertia }: HttpContextContract) {

        // console.log('UserID: ', request.params().userId)

        const dataSource = await GetGeneology(request.params().userId)

        const levels = await GetLevels(request.params().userId)

        const user: any = await User.query()
                               .preload('package')
                               .where('id', request.params().userId)
                               .first()
        
        const childs = await User.query().where('parent_id', user.id)

        const totalReferences = childs.length

        const packages: any = await Package.all()

        return inertia.render('Admin/User', { dataSource, levels, user, totalReferences, packages })
    }

    async changeUserRank({request, response}: HttpContextContract){

        const rankId = request.body().selectedRank
        const userId = request.body().userId

        const user = await User.query()
                               .where('id', userId)
                               .first()

        if(user){
            user.package_id = rankId
            await user.save()
        }

        response.redirect('/admin/user/'+userId)

    }
}
