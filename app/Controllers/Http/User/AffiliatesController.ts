import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Click from 'App/Models/Click'
import User from 'App/Models/User'
import { DateTime } from 'luxon'
// import Database from '@ioc:Adonis/Lucid/Database'

export default class AffiliatesController {

    async dashboard({ inertia, auth }: HttpContextContract) {

        const myId: any = auth.user?.id
        const myChilds = await User.query()
            .where('parent_id', myId)
            .orderBy('id', 'desc')
            .limit(5)


        const today = DateTime.now().toString()
        const lastSevenDay = DateTime.now().minus({ days: 7 }).toString()

        console.log('Date today: ', today)
        console.log('lastSevenDay: ', lastSevenDay)


        const clicks = Click.query()
            .where('user_id', myId)
            .where('created_at', '>', lastSevenDay)
  
   



        // const example = 'select count(*) as count, DATE(created_at) as cmonth from `clicks` where `user_id` = 4 group by `cmonth`'

        // const original = 'SELECT count(*) as count, DATE(created_at) as cmonth FROM clicks WHERE user_id = 4 GROUP BY cmonth'

        // const sql = `
        // SELECT count(*) as count, 
        // DATE_FORMAT(created_at, '%d') as cmonth 
        // FROM clicks 
        // WHERE user_id = ? 
        // AND created_at > ? 
        // GROUP BY cmonth
        // `
        // const clicks = await Database.rawQuery(sql, [myId, lastSevenDay])

        // console.log('Clicks: ', clicks)

        return inertia.render('Users/Dashboard', {
            childUsers: myChilds,
            clicks: clicks
        })
    }


    async myStatistics({ inertia, auth }: HttpContextContract) {

        // console.log('auth.user.id: ', auth.user.id)

        const myId: any = auth.user?.id
        const myChilds = await User.query()
            .where('parent_id', myId)
            .orderBy('id', 'desc')

        console.log('My Childs: ', myChilds)
        return inertia.render('Users/MyStatistics', {
            childUsers: myChilds
        })
    }

    async myGeneology({ inertia }: HttpContextContract) {
        return inertia.render('Users/MyGeneology', {}, { ssr: false })

    }

    async myNetwork({ inertia, auth }: HttpContextContract) {

        const myId: any = auth.user?.id
        const myChilds = await User.query()
            .where('parent_id', myId)
            .orderBy('id', 'desc')
        return inertia.render('Users/MyNetwork', {
            childUsers: myChilds
        })

    }
}
