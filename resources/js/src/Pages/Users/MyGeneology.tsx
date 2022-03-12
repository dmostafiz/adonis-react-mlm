import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function MyGeneology() {
    return (
        <UserLayout>
            <Box>
                <Heading as='h4' fontSize='28px'>My Geneology</Heading>
            </Box>

        </UserLayout>
    )
}
