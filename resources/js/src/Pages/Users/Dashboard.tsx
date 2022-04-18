// @ts-ignore
import { Box, Heading, Text } from '@chakra-ui/react'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import AccountInfoCards from '../../Components/UserPanel/Dashboard/AccountInfoCards'
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard'
import UsersList from '../../Components/UserPanel/Dashboard/UsersList'

import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function Dashboard({childUsers, clicks}: any) {
    // @ts-ignore
    const { authUser }: any = usePage().props

    return (
        <UserLayout>


            <Box w='full'>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Dashboard</Heading>
                <Text>Hello {authUser?.first_name}! welcome to your dashboard</Text>
            </Box>

            <Box w='full' mt='50px'>
                <AccountInfoCards childUsers={childUsers} clicks={clicks}/>
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px'>
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Invitation link</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <ReferralClipboard />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Recent registrations</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <UsersList userList={childUsers}/>
            </Box>


        </UserLayout>
    )
}
