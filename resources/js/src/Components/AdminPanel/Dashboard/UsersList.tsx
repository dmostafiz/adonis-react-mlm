import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr, Tooltip, Avatar, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import NoDataFound from '../../NoDataFound'
import moment from 'moment'
import { Link } from '@inertiajs/inertia-react'

const UsersList: any = ({ userList }) => {

    useEffect(() => {
        console.log('User lists: ', userList)
    }, [])

    return (
        <div>
            <Box as='div' w='full' overflowX='auto'>
                {userList.length ?
                    <Table variant='simple' w='full'>

                        <Thead>
                            <Tr>
                                <Th>User</Th>
                                <Th>Package</Th>
                                <Th>Join date</Th>
                                <Th>Ref ID</Th>
                                <Th>Invited by</Th>
                                <Th>Referral</Th>
                                <Th isNumeric></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {userList.map((user: any, index: React.Key) => <Tr key={index}>
                                <Td >
                                    <Flex align='center' gap='6px'>
                                        <Avatar
                                            size='sm'
                                            name={`${user.first_name} ${user.last_name}`}
                                        // src='https://bit.ly/tioluwani-kolawole'
                                        />
                                        {`${user.first_name} ${user.last_name}`}
                                    </Flex>
                                </Td>
                                <Td>{user.package?.package}</Td>
                                <Td>{moment(user.created_at).format('l')}</Td>
                                <Td>{user.ref_id}</Td>
                                <Td>{user.parent ? `${user.parent?.first_name} ${user.parent?.last_name}` : '######'}</Td>
                                <Td>{user.children?.length} users</Td>
                                <Td isNumeric>
                                    <Tooltip label='View Details' hasArrow>
                                        <Link href={`/admin/user/${user.id}`}>

                                            <IconButton
                                                variant='outline'
                                                colorScheme='teal'
                                                aria-label='Call Sage'
                                                fontSize='20px'
                                                icon={<CgDetailsMore />}
                                                value='Details'
                                            />
                                        </Link>
                                    </Tooltip>
                                </Td>
                            </Tr>)}


                        </Tbody>

                    </Table>
                    : <NoDataFound />
                }
            </Box>
        </div>
    )
}

export default UsersList