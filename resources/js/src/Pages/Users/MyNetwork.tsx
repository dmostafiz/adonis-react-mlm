import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UsersList from '../../Components/UserPanel/Dashboard/UsersList'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function MyNetwork({childUsers}) {
    return (
        <UserLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Network</Heading>
            </Box>

            <Box w='full' mt='100px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>My Network</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <UsersList userList={childUsers} />
            </Box>
        </UserLayout>
    )
}
