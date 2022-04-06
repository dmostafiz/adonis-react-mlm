import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AccountInfoChart from '../../Components/AdminPanel/Dashboard/AccountInfoChart'
import UsersList from '../../Components/AdminPanel/Dashboard/UsersList'
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout'
// import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function MyStatistics({users}) {
    return (
        <AdminLayout>

            <Box w='full'>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Statistics Overview</Heading>
                {/* <Text>Hello Test User! w</Text> */}
            </Box>

            <Box mt='50px' w='full'>
                <AccountInfoChart />
            </Box>

  
            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Recent registrations</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <UsersList userList={users} />   
            </Box>

        </AdminLayout>
    )
}
