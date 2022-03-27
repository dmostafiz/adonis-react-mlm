// @ts-ignore
import { Box, Heading, Text } from '@chakra-ui/react'
import { usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import AccountInfoCards from '../../Components/UserPanel/Dashboard/AccountInfoCards'
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard'
import UsersList from '../../Components/UserPanel/Dashboard/UsersList'
// import getUser from '../../Helpers/getUser'
// import authUser from '../../Helpers/getUser'
// import authUser from '../../Helpers/authUser'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

// interface Au{
//     first_name: string
// }

export default function Dashboard() {
    // @ts-ignore
    const { authUser } = usePage().props

    // const [user, setUser] = useState(Object)
    
    // useEffect(() => {
    //     setUser(authUser)
    // }, [authUser])

    // console.log('Authssssssssss: ', authUser)
    return (
        <UserLayout>


            <Box w='full'>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Dashboard</Heading>
                <Text>Hello {authUser?.first_name}! welcome to your dashboard</Text>
            </Box>

            <Box w='full' mt='50px'>
                <AccountInfoCards />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px'>
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Invitation link</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <ReferralClipboard />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Recent registrations</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <UsersList />
            </Box>


        </UserLayout>
    )
}
