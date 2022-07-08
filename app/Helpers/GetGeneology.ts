import User from "App/Models/User"

export default async function GetGeneology(myId: number) {

    const authUser: any = await User.query()
        .preload('children')
        .preload('package')
        .where('id', myId)
        .first()

    const childArray: any = []

    function getDataSourceMatrix(user: any, allUsers: any) {

        // console.log('Childsssss: ', user)


        const userChildren = allUsers.filter((usr: any) => usr.parent_id == user.id)

        console.log('User children: ', userChildren.length)

        userChildren.map((child: any) => {

            childArray.push({
                id: child.id,
                name: child.first_name + ' ' + child.last_name,
                title: child.email,
                parent_id: child.parent_id,
                ref_id: child.ref_id,
                purchased: child.total_purchased,
            })

            return getDataSourceMatrix(child, allUsers)

        })
    }


    const allUsers: any = await User.query().where('id', '>', myId).where('isadmin', '!=', true).preload('children')

    // allUsers.map((user: any) => console.log('sdfgfg: ', user.email))

    // console.log('All users: ', authUser)
    getDataSourceMatrix(authUser, allUsers)

    console.log('Child array 1: ', childArray)


    //Make the geneology tree

    function makeTree(usersArray: any, parentId: any, maxDepth: number, currentDepth: number = 0) {

        console.log('User Array ffffffff: ', usersArray)

        const childFilter = usersArray.filter((childData: any) => childData.parent_id == parentId)

        var nextDepth = ++currentDepth;
        // console.log('ChildFilter: ', childFilter)
        const childTree = childFilter.reduce((tree: any, userData: any) => {

            if (maxDepth > currentDepth) {
                return [
                    ...tree,
                    {
                        ...userData,
                        package: authUser.package,
                        level: currentDepth,
                        children: makeTree(usersArray, userData.id, maxDepth, nextDepth),
                    },

                ]

            }

        }, [])

        return childTree
    }

    const maxDepth: number = 8

    const root = makeTree(childArray, myId, maxDepth)

    console.log('Child array 2: ', root)



    return {
        id: authUser.id,
        name: authUser.first_name + ' ' + authUser.last_name,
        title: authUser.email,
        ref_id: authUser.ref_id,
        purchased: authUser.total_purchased,
        package: authUser.package,
        children: root
    }
}