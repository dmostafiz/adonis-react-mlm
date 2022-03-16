import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr, Tooltip, Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import { CgDetailsMore } from 'react-icons/cg'

export default function UsersList() {
    return (
        <div>
            <Box as='div' w='full' overflowX='auto'>
                <Table variant='simple' w='full'>

                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Join date</Th>
                            <Th>Ref ID</Th>
                            <Th isNumeric></Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td>
                                <Flex align='center' gap='6px'>
                                    <Avatar
                                        size='sm'
                                        name='Akram Sheikh'
                                        src='https://bit.ly/tioluwani-kolawole'
                                    />
                                    Akram Sheikh
                                </Flex>
                            </Td>
                            <Td>03/04/2022</Td>
                            <Td>34556</Td>
                            <Td isNumeric>
                                <Tooltip label='View Details' hasArrow>
                                    <IconButton
                                        variant='outline'
                                        colorScheme='teal'
                                        aria-label='Call Sage'
                                        fontSize='20px'
                                        icon={<CgDetailsMore />}
                                        value='Details'
                                    />
                                </Tooltip>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Flex align='center' gap='6px'>
                                    <Avatar
                                        size='sm'
                                        name='Kola Tioluwani'
                                        src='https://bit.ly/tioluwani-kolawole'
                                    />
                                    Kola Tioluwani
                                </Flex>
                            </Td>
                            <Td>03/04/2022</Td>
                            <Td>65534</Td>
                            <Td isNumeric>
                                <Tooltip label='View Details' hasArrow>
                                    <IconButton
                                        variant='outline'
                                        colorScheme='teal'
                                        aria-label='Call Sage'
                                        fontSize='20px'
                                        icon={<CgDetailsMore />}
                                        value='Details'
                                    />
                                </Tooltip>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Flex align='center' gap='6px'>
                                    <Avatar
                                        size='sm'
                                        name='Great Man'
                                        src='https://bit.ly/tioluwani-kolawole'
                                    />
                                    Great Man
                                </Flex>
                            </Td>
                            <Td>03/04/2022</Td>
                            <Td>85656</Td>
                            <Td isNumeric>
                                <Tooltip label='View Details' hasArrow>
                                    <IconButton
                                        variant='outline'
                                        colorScheme='teal'
                                        aria-label='Call Sage'
                                        fontSize='20px'
                                        icon={<CgDetailsMore />}
                                        value='Details'
                                    />
                                </Tooltip>
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>
            </Box>
        </div>
    )
}
