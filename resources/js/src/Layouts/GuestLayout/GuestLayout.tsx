import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from './inc/Footer'
import TopNavigation from './inc/TopNavigation'

export default function GuestLayout({ children, PDt = 5 }) {
    return (
        <Flex direction='column'  justify='space-between'>
            <TopNavigation />

            <Box pt={PDt}>
                {children}
            </Box>

            <Footer />
        </Flex>
    )
}
