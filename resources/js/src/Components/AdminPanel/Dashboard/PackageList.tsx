import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr, Tooltip, Avatar, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import NoDataFound from '../../NoDataFound'
import moment from 'moment'

const PackageList: any = ({ packages }) => {

    useEffect(() => {
        console.log('Package lists: ', packages)
    }, [])

    return (
        <div>
            <Box as='div' w='full' overflowX='auto'>
                {packages.length ?
                    <Table variant='simple' w='full'>

                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Package Name</Th>
                                <Th>Level 1</Th>
                                <Th>Level 2</Th>
                                <Th>Level 3</Th>
                                <Th>Level 4</Th>
                                <Th>Level 5</Th>
                                <Th>Level 6</Th>
                                <Th>Level 7</Th>
                                <Th isNumeric></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {packages.map((pkg: any, index: number) => <Tr key={index}>
                                <Td >{index+1}</Td>
                                <Td>{pkg.package}</Td>
                                <Td>{pkg.level_one}%</Td>
                                <Td>{pkg.level_two}%</Td>
                                <Td>{pkg.level_three}%</Td>
                                <Td>{pkg.level_four}%</Td>
                                <Td>{pkg.level_five}%</Td>
                                <Td>{pkg.level_six}%</Td>
                                <Td>{pkg.level_seven}%</Td>
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
                            </Tr>)}


                        </Tbody>

                    </Table>
                    : <NoDataFound />
                }
            </Box>
        </div>
    )
}

export default PackageList