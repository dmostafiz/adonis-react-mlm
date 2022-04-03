import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Container, Flex } from '@chakra-ui/react'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Footer from './inc/Footer'
import TopNavigation from './inc/TopNavigation'

export default function GuestLayout({ children, PDt = 5 }) {

    const { successMsg, errorMsg, infoMsg }: any = usePage().props

    return (
        <Flex direction='column' justify='space-between'>
            <TopNavigation />

            <Box pt={PDt}>
                {successMsg && (
                    <Container maxW='container.xl'>
                        <Alert status='success' variant='left-accent'>
                            <AlertIcon />
                            <AlertTitle mr={2}>Success!</AlertTitle>
                            <AlertDescription>{successMsg}.</AlertDescription>
                            {/* <CloseButton position='absolute' right='8px' top='8px' /> */}
                        </Alert>
                    </Container>
                )}

                {errorMsg && (
                    <Container maxW='container.xl'>
                        <Alert status='error' variant='left-accent'>
                            <AlertIcon />
                            <AlertTitle mr={2}>Error!</AlertTitle>
                            <AlertDescription>{errorMsg}.</AlertDescription>
                            {/* <CloseButton position='absolute' right='8px' top='8px' /> */}
                        </Alert>
                    </Container>
                )}

                {infoMsg && (
                    <Container maxW='container.xl'>
                        <Alert status='info'>
                            <AlertIcon />
                            {/* <AlertTitle mr={2}>Th!</AlertTitle> */}
                            <AlertDescription>{infoMsg}</AlertDescription>
                            {/* <CloseButton position='absolute' right='8px' top='8px' /> */}
                        </Alert>
                    </Container>
                )}

                {children}
            </Box>

            <Footer />
        </Flex>
    )
}
