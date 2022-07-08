import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr, Tooltip, Avatar, Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import NoDataFound from '../../NoDataFound'
import moment from 'moment'
import { Link } from '@inertiajs/inertia-react'

const ProductList: any = ({ products }) => {

    useEffect(() => {
        console.log('User lists: ', products)
    }, [])

    return (
        <div>
            <Box as='div' w='full' overflowX='auto'>
                {products.length ?
                    <Table variant='simple' w='full'>

                        <Thead>
                            <Tr>
                                <Th>Product Image</Th>
                                <Th>Product Name</Th>
                                <Th>Product Price</Th>
                                <Th>Created date</Th>
                                <Th isNumeric></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {products.map((product: any, index: React.Key) => <Tr key={index}>
                                <Td >
                                    <Image
                                        width='100px'
                                        src={product.image}
                                    />
                                </Td>
                                <Td> {product.name}</Td>
                                <Td> ${product.price}</Td>
                                <Td>{moment(product.created_at).format('l')}</Td>

                                <Td isNumeric>
                                    <Tooltip label='Delete Product' hasArrow>
                                        <Link href={`/admin/product/delete/${product.id}`}>

                                            <IconButton
                                                variant='outline'
                                                colorScheme='red'
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

export default ProductList