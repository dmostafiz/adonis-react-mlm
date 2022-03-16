import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout';
// import UserLayout from '../../Layouts/UsersLayout/UserLayout'
// import ReactFamilyTree from 'react-family-tree';
// import FamilyNode from '../../Components/UserPanel/FamilyNode';

export default function MyGeneology() {
    const WIDTH = 70;
    const HEIGHT = 80;
    return (
        <AdminLayout>
            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
            </Box>

            <Box mt='200px' w='full' minH='200px' bg='white' rounded='base' shadow='base'>
                {/* <ReactFamilyTree
                    nodes={[]}
                    rootId={rootId}
                    width={WIDTH}
                    height={HEIGHT}
                    renderNode={(node) => (
                        <FamilyNode
                            key={node.id}
                            node={node}
                            style={{
                                width: WIDTH,
                                height: HEIGHT,
                                transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                            }}
                        />
                    )}
                /> */}
            </Box>

        </AdminLayout>
    )
}
