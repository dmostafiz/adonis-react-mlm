import { Box, Heading, Stack, Tag, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AccountInfoChart from '../../Components/UserPanel/Dashboard/AccountInfoChart'
import UsersList from '../../Components/UserPanel/Dashboard/UsersList'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function MyStatistics({ childUsers, clicksByShareLinks }) {

    useEffect(() => {
        console.log('childUsers: ', clicksByShareLinks)
    }, [])
    return (
        <UserLayout>

            <Box w='full'>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Statistics</Heading>
                {/* <Text>Hello Test User! w</Text> */}
            </Box>

            <Box mt='50px' w='full'>
                <AccountInfoChart />
            </Box>

            {clicksByShareLinks.length && <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={5} fontSize='2xl' fontWeight='semibold'>Clicks by share options</Heading>
                <Stack direction='row'>

                    {clicksByShareLinks.map((link, index) => <Tag key={index} size='lg' variant='subtle' colorScheme='linkedin'>
                        {link.source } ~ <Text fontSize='20px' ml={2} fontWeight='semibold'>{link.total }</Text>
                    </Tag>)}

                </Stack>
            </Box>}  
            


            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>All affiliate registrations</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <UsersList userList={childUsers} />

            </Box>

        </UserLayout>
    )
}
