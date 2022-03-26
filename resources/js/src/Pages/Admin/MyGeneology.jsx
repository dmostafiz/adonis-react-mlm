import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout';

export default function MyGeneology() {

    return (
        <AdminLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
            </Box>

            <Box mt='200px' w='full' minH='200px' bg='white' rounded='base' shadow='base'>
               
            </Box>

        </AdminLayout>
    )
}
