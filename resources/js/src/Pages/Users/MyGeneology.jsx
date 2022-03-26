import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'
// import ReactFamilyTree from 'react-family-tree';
// import FamilyNode from '../../Components/UserPanel/FamilyNode';
import Tree from 'react-d3-tree';


const orgChart = {
    name: 'You',
    children: [
        {
            name: 'Gster',
            // attributes: {
            //     department: 'Production',
            // },
            children: [
                {
                    name: 'Kalvic',
                    // attributes: {
                    //     department: 'Fabrication',
                    // },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Roman',
                    // attributes: {
                    //     department: 'Assembly',
                    // },
                    children: [
                        {
                            name: 'Worker',
                        },

                        {
                            name: 'Greater',
                        },
                    ],
                },

                {
                    name: 'Wlaker',
                    // attributes: {
                    //     department: 'Assembly',
                    // },
                    children: [
                        {
                            name: 'dfter',
                        },
                        {
                            name: 'rocker',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Kruso',
            // attributes: {
            //     department: 'Production',
            // },
            children: [
                {
                    name: 'Kalvic',
                    // attributes: {
                    //     department: 'Fabrication',
                    // },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Roman',
                    // attributes: {
                    //     department: 'Assembly',
                    // },
                    children: [
                        {
                            name: 'Worker',
                        },

                        {
                            name: 'Greater',
                        },
                    ],
                },

                {
                    name: 'Wlaker',
                    // attributes: {
                    //     department: 'Assembly',
                    // },
                    children: [
                        {
                            name: 'dfter',
                        },
                        {
                            name: 'rocker',
                        },
                    ],
                },
            ],
        },
    ],
};

export default function MyGeneology() {
    // const WIDTH = 70;
    // const HEIGHT = 80;
    return (
        <UserLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
            </Box>

            <Box mt='200px' w='full' minH='300px' bg='white' rounded='base' shadow='base'>
                <div id="treeWrapper" style={{ width: '100%', height:'400px'}}>
                    <Tree data={orgChart} orientation='vertical' />
                </div>
            </Box>

        </UserLayout>
    )
}
