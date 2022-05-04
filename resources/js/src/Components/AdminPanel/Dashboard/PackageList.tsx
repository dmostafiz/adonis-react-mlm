import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr, Tooltip, Input, Button } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import React, { useEffect, useState } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import NoDataFound from '../../NoDataFound'

const PackageList: any = ({ packages }) => {

    useEffect(() => {
        console.log('Package lists: ', packages)
    }, [])

    const [editRank, setEditRank] = useState(null)

    const handleEditRank = (pkg) => {
        setEditRank(pkg)
    }

    const saveEditedRank = () => {
        Inertia.post('/admin/save_edited_rank', {pakage: editRank}, {preserveScroll: true})
        setEditRank(null)
    }

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
                                <Td >{index + 1}</Td>
                                <Td>{pkg.package}</Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_one}
                                                onChange={e => setEditRank({ ...editRank, level_one: e.target.value })}
                                            />
                                            : pkg.level_one
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_two}
                                                onChange={e => setEditRank({ ...editRank, level_two: e.target.value })}
                                            />
                                            : pkg.level_two
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_three}
                                                onChange={e => setEditRank({ ...editRank, level_three: e.target.value })}
                                            />
                                            : pkg.level_three
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_four}
                                                onChange={e => setEditRank({ ...editRank, level_four: e.target.value })}
                                            />
                                            : pkg.level_four
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_five}
                                                onChange={e => setEditRank({ ...editRank, level_five: e.target.value })}
                                            />
                                            : pkg.level_five
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_six}
                                                onChange={e => setEditRank({ ...editRank, level_six: e.target.value })}
                                            />
                                            : pkg.level_six
                                        }%
                                    </Box>
                                </Td>
                                <Td>
                                    <Box display='flex' justifySelf='center' gap={2}>
                                        {editRank && editRank.id == pkg.id
                                            ? <Input
                                                width={12}
                                                px='5px'
                                                type='number'
                                                value={editRank?.level_seven}
                                                onChange={e => setEditRank({ ...editRank, level_seven: e.target.value })}
                                            />
                                            : pkg.level_seven
                                        }%
                                    </Box>
                                </Td>
                                <Td isNumeric>
                                    {editRank && editRank.id == pkg.id
                                        ?
                                        <Tooltip label='Update Rank' hasArrow>
                                            <Button
                                                variant='outline'
                                                colorScheme='green'
                                                p={3}
                                                // icon={<CgDetailsMore />}
                                                size='small'
                                                onClick={saveEditedRank}
                                            >
                                                Update
                                            </Button>
                                        </Tooltip>
                                        :
                                        <Tooltip label='Edit Rank' hasArrow>
                                            <IconButton
                                                variant='outline'
                                                colorScheme='teal'
                                                aria-label='Call Sage'
                                                fontSize='20px'
                                                icon={<CgDetailsMore />}
                                                value='Details'
                                                onClick={() => handleEditRank(pkg)}
                                            />
                                        </Tooltip>
                                    }

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