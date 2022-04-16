import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AdminController {

    async dashboard({ inertia }: HttpContextContract) {
        const users = await User.query()
            .where('isadmin', false)
            .preload('parent')
            .preload('children')
            .preload('package')
            .orderBy('id', 'desc')
            .limit(10)

        return inertia.render('Admin/Dashboard', { users })
    }

    async my_statistics({ inertia }: HttpContextContract) {
        const users = await User.query()
            .where('isadmin', false)
            .preload('parent')
            .preload('children')
            .preload('package')
            .orderBy('id', 'desc')
            .limit(10)
            
        return inertia.render('Admin/MyStatistics', { users })
    }

    async my_geneology({ inertia }: HttpContextContract) {
        return inertia.render('Admin/MyGeneology')
    }

    async my_network({ inertia }: HttpContextContract) {
        return inertia.render('Admin/MyNetwork')
    }

    async users({ inertia }: HttpContextContract) {
        const users = await User.query()
            .where('isadmin', false)
            .preload('parent')
            .preload('children')
            .preload('package')
            .orderBy('id', 'desc')


        return inertia.render('Admin/Users', { users })
    }
}
