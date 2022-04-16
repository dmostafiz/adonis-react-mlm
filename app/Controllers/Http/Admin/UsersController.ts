import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GetGeneology from 'App/Helpers/GetGeneology'
import GetLevels from 'App/Helpers/GetLevels'
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

        console.log('Data source: ', user)

        return inertia.render('Admin/User', { dataSource, levels, user, totalReferences })
    }
}
