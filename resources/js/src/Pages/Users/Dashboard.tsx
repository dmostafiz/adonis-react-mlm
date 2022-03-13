import { Box, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import AccountInfoCards from '../../Components/UserPanel/Dashboard/AccountInfoCards'
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function Dashboard() {
    return (
        <UserLayout>

            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Dashboard</Heading>
                <Text>Hello Test User! welcome to your dashboard</Text>
            </Box>

            <Box w='full' mt='20px'>
                <AccountInfoCards />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px'>
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Invitation link</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <ReferralClipboard />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Recent registrations</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>

                <Box overflowX='auto'>
                    <Table variant='simple' >

                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </Box>

            </Box>


        </UserLayout>
    )
}
