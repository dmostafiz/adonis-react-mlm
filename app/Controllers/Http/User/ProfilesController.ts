import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GetLevels from 'App/Helpers/GetLevels'
import User from 'App/Models/User'

export default class ProfilesController {

    async getProfileOrCreate({ inertia, auth }: HttpContextContract) {

        const myId: any = auth.user?.id


        const levels = await GetLevels(myId)
        const user = await User.query()
                               .preload('package')
                               .where('id',myId)
                               .first()

        console.log('My Level:', levels)

        return inertia.render('Users/Profile/ProfilePage', {levels, user})
    }
}
