import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function Dashboard() {
    return (
        <UserLayout>

            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Dashboard</Heading>
            </Box>

        </UserLayout>
    )
}
