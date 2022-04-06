import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UsersList from '../../Components/AdminPanel/Dashboard/UsersList'
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout'
// import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function Users({users}) {

    console.log('All users: ', users)
    return (
        <AdminLayout>
            
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Users</Heading>
            </Box>

            <Box w='full' mt='30px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>All Registered Users</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <UsersList userList={users} />
            </Box>

        </AdminLayout>
    )
}
