import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function UsersList() {
    return (
        <div>
            <Box as='div' w='full' overflowX='auto'>
                <Table variant='simple' w='full'>

                    <Thead>
                        <Tr>
                            <Th>User Info</Th>
                            <Th>Join date</Th>
                            <Th>Ref ID</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres</Td>
                            <Td>34556</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres</Td>
                            <Td>65534</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres</Td>
                            <Td>85656</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </Box>
        </div>
    )
}
