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

    async myGeneology({ inertia, auth }: HttpContextContract) {

        const myId: any = auth.user?.id

        const fakeDataSource = {
            id: "n1",
            name: "Test User",
            title: "general manager",
            children: [
                {
                    id: "n2",
                    name: "Bo Miao",
                    title: "department manager",
                    children: [
                        { id: "n4", name: "Tie Hua", title: "senior engineer" },
                        {
                            id: "n5",
                            name: "Hei Hei",
                            title: "senior engineer",
                            children: [
                                { id: "n6", name: "Dan Dan", title: "engineer" },
                                { id: "n7", name: "Xiang Xiang", title: "engineer" }
                            ]
                        },
                        { id: "n8", name: "Pang Pang", title: "senior engineer" }
                    ]
                },
                {
                    id: "n3",
                    name: "Su Miao",
                    title: "department manager",
                    children: [
                        { id: "n4", name: "Tie Hua", title: "senior engineer" },
                        {
                            id: "n5",
                            name: "Hei Hei",
                            title: "senior engineer",
                            children: [
                                { id: "n6", name: "Dan Dan", title: "engineer" },
                                { id: "n7", name: "Xiang Xiang", title: "engineer" }
                            ]
                        },
                        { id: "n8", name: "Pang Pang", title: "senior engineer" }
                    ]
                },
                { id: "n9", name: "Hong Miao", title: "department manager" },
                {
                    id: "n10",
                    name: "Chun Miao",
                    title: "department manager",
                    children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
                }
            ]
        };



        // const authUser = await User.q({})myId)

        // let dataSourceMatrix: any = {}


        console.log('start of loop')





        const childArray: any = []

        function getDataSourceMatrix(user: any, allUsers: any) {

            // console.log('####### all: ', allUsers)

            // if (allUsers.length) {

                const userChildren = allUsers?.filter((usr: any) => usr.parent_id == user.id)

                // console.log('########userChildren:', userChildren?.length)

                userChildren.map((child: any) => {

                    childArray.push({
                        id: child.id,
                        name: child.first_name+ ' '+ child.last_name,
                        title: child.email,
                        parent_id: child.parent_id,
                        ref_id: child.ref_id
                    })

                    // console.log('******Child:', child.children?.length)

                    // if (child.children?.length) {

                        // console.log('//////////////', child.children)
                        // const childsss: [] = child?.children
                        getDataSourceMatrix(child, allUsers)
                    // }else{
                    //     // console.log('Last Child: ', child.children)
                    // }

                })
            // }


        }


        const authUser: any = await User.query().where('id', myId).preload('children').first()

        const allUsers: any = await User.query().where('isadmin', '!=', true).preload('children')

        allUsers.map((user: any) => console.log('sdfgfg: ', user.email))

        // console.log('All users: ', allUsers.length)
        getDataSourceMatrix(authUser, allUsers)


        function makeTree(nodes: any, parentId: any) {
            return nodes
              .filter((node: any) => node.parent_id === parentId)
              .reduce(
                (tree: any, node: any) => [
                  ...tree,
                  {
                    ...node,
                    children: makeTree(nodes, node.id),
                  },
                ],
                [],
              )
          }
        // console.log('End of loop')

        const root = makeTree(childArray, myId)

        // console.log('Rooooooooooooooooooooot: ', childArray)

        const dataSource = { 
            id: authUser.id,
            name: authUser.first_name+ ' '+ authUser.last_name,
            title: authUser.email,
            ref_id: authUser.ref_id,
            children: root
        }

        return inertia.render('Users/MyGeneology', { dataSource })

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
