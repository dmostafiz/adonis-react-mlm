import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout/AdminLayout'
import PackageList from './../../../Components/AdminPanel/Dashboard/PackageList';

export default function Index({packages}) {
    return (
        <AdminLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Packages</Heading>
            </Box>

            <Box w='full' mt='30px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>All Package list</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <PackageList packages={packages} />
            </Box>

        </AdminLayout>
    )
}
