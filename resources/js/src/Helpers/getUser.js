import { usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'

// interface Au{
//     first_name: string
// }
const getUser = () => {


    const { authUser } = usePage().props

    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     setUser(authUser)
    // }, [authUser])

    return authUser
}

export default getUser
