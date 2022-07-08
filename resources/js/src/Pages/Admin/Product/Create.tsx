import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout/AdminLayout';
import { Box, Button, Heading, Input, SimpleGrid, Spacer } from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';

import {
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia';

export default function Create() {


  const {data, setData, processing} = useForm({
    name: '',
    price: '',
    content: ''
  })

  const handleCreate = () => {
    Inertia.post('/admin/product/store', data)
  }

  return (
    <AdminLayout>

      <Box>
        <Heading as='h4' fontWeight='semibold' fontSize='28px'>Create Product</Heading>
      </Box>

      <Box w='full' mt='30px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
        <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Create Product</Heading>

        <Box py={5}>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <FormControl>
              <FormLabel htmlFor='product_name'>Product Name</FormLabel>
              <Input onChange={e=>setData({...data, name: e.target.value})} value={data.name} id='product_name' type='text' placeholder='Enter product name' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='product_price'>Product Price</FormLabel>
              <Input onChange={e=>setData({...data, price: e.target.value})} value={data.price} id='product_price' type='number' placeholder='Enter product price' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>

          </SimpleGrid>

          <FormControl mt={5}>
            <FormLabel htmlFor='product_name'>Product Content</FormLabel>
            <Input onChange={e=>setData({...data, content: e.target.value})} value={data.content} as='textarea' minH={300} placeholder='Enter product description'/>
          </FormControl>

          <Button onClick={handleCreate} colorScheme='green' mt={5}>Create Product</Button>

        </Box>
      </Box>
    </AdminLayout>
  )
}
