import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'
// import ReactFamilyTree from 'react-family-tree';
// import FamilyNode from '../../Components/UserPanel/FamilyNode';
// import Tree from 'react-d3-tree';
import Geneology from '../../Components/UserPanel/Geneology/Geneology';


export default function MyGeneology() {
    // const WIDTH = 70;
    // const HEIGHT = 80;
    return (
        <UserLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
            </Box>

            <Box mt='30px' w='full' minH='300px' bg='white' rounded='base' shadow='base'>
                
                    <Geneology />
            
            </Box>

        </UserLayout>
    )
}
