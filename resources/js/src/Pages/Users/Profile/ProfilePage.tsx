import { Avatar, Badge, Box, Flex, Heading, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import UserLayout from '../../../Layouts/UsersLayout/UserLayout'

export default function ProfilePage({ levels, user }) {
    return (
        <UserLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Profile</Heading>
            </Box>
            <Flex color='gray.700' gap={3} mt={10}>
                <Flex height='250px' flex='1' justify='center' direction='column' alignItems='center' p={5} bg='white'>
                    <Avatar size='2xl' mb={2} name={`${user.first_name} ${user.last_name}`} src='' />
                    <Text as='h2' fontSize='2xl'>{`${user.first_name} ${user.last_name}`}</Text>
                    <Text as='p'>{user.first_name}</Text>
                </Flex>

                <Box flex='3' py={3} px={5} bg='white'>
                    <Text as='h2' fontSize='xl' fontWeight='bold'>Account details</Text>
                    <Box w='100%' mt={4}>
                        <Flex w='100%' justifyContent='space-between' p={2} borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Join Data</Text>
                            <Text>{moment(user.createdAt).format('l')}</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' p={2} borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Total references</Text>
                            <Text>6 members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' align='center' p={2} borderBottom='0px solid #2d374814'>
                            <Text fontWeight='semibold'>Package</Text>
                            <Badge colorScheme='purple' variant='solid'>{user.package.package}</Badge>
                        </Flex>

                        <Box pt={3} pb={3}>
                            <Text fontSize='xl' fontWeight='bold'>Level statistics</Text>
                        </Box>


                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level One</Text>
                            <Text>{levels.levelOne} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level Two</Text>
                            <Text>{levels.levelTwo} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level Three</Text>
                            <Text>{levels.levelThree} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level Four</Text>
                            <Text>{levels.levelFour} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level Five</Text>
                            <Text>{levels.levelFive} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Level Six</Text>
                            <Text>{levels.levelSix} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' >
                            <Text fontWeight='semibold'>Level Seven</Text>
                            <Text>{levels.levelSeven} members</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </UserLayout>
    )
}
