import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'
import Geneology from '../../Components/UserPanel/Geneology/Geneology';
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard';


export default function MyGeneology({ dataSource }) {
    // const WIDTH = 70;
    // const HEIGHT = 80;

    useEffect(() => {
        console.log('dataSource: ', dataSource)
    }, [])

    return (
        <UserLayout>

            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
            </Box>


            <Box position='relative' width='100%' mt='30px' minHeight='550px' bg='white' rounded='base' shadow='base' overflow='auto'>

                <Box position='absolute'>

                    {dataSource?.children?.length
                        ? <Geneology dataSource={dataSource} />
                        : <Flex direction='column' gap={2} p={5}>
                            <Text fontSize='xl' fontWeight='bold' color='gray.600'>Your geneology is empty</Text>
                            <Text fontSize='md' fontWeight='semibold' color='gray.400'>
                                Start sharing your invitation link to make your geneology
                            </Text>

                            <ReferralClipboard />

                        </Flex>}
                </Box>


            </Box>

        </UserLayout>
    )
}
