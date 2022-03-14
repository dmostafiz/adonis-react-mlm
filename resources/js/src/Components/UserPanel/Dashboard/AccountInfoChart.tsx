import { useColorModeValue, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import InvitationClicks from '../Charts/InvitationClicks'
import InvitationRegistrations from '../Charts/InvitationRegistrations'

export default function AccountInfoChart() {
    return (

        <Grid
            // h='200px'
            w='full'
            templateRows='repeat(1, 1fr)'
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
            gap={4}
            textAlign={["left", "left"]}
        >

            <GridItem
                bg={useColorModeValue("white", "gray.800")}
                px={4}
                py={6}
                shadow="base"
                rounded="md"
            >
                <InvitationClicks />
            </GridItem>

            <GridItem
                bg={useColorModeValue("white", "gray.800")}
                px={4}
                py={6}
                shadow="base"
                rounded="md"
            >
                <InvitationRegistrations />
            </GridItem>

        </Grid>

    )
}
