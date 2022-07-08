import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout/AdminLayout';
import { Box, Heading } from '@chakra-ui/react';
import ProductList from '../../../Components/AdminPanel/Dashboard/ProductList';

export default function List({ products }) {
  return (
    <AdminLayout>

      <Box>
        <Heading as='h4' fontWeight='semibold' fontSize='28px'>Product List</Heading>
      </Box>

      <ProductList products={products} />
      
    </AdminLayout>
  )
}
