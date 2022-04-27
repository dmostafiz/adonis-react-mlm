import { Box, Container, GridItem, SimpleGrid, chakra } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../Layouts/UsersLayout/UserLayout'


// import { Spinner } from '@chakra-ui/react'

export default function Blog() {

  return (
    
    <UserLayout>
      <Container maxW='container.xl'>

        <Box py={10} mx="auto">
          <SimpleGrid
            alignItems="center"
            w={{ base: "full", xl: 11 / 12 }}
            columns={{ base: 1, lg: 11 }}
            gap={{ base: 0, lg: 24 }}
            mx="auto"
          >
            <GridItem
              colSpan={{ base: "auto", lg: 6 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <chakra.h1
                mb={4}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", md: "none" }}
                // color={useColorModeValue("gray.900", "gray.200")}
                color='gray.900'
                letterSpacing={{ base: "normal", md: "tight" }}
              >
                Blog
              </chakra.h1>
              <chakra.p
                mb={{ base: 10, md: 4 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="thin"
                color="gray.500"
                letterSpacing="wider"
              >
                Low-latency voice and video feels like you’re in the same room. Wave
                hello over video, watch friends stream their games, or gather up and
                have a drawing session with screen share.
              </chakra.p>
            </GridItem>



            <GridItem colSpan={{ base: "auto", md: 5 }}>


            </GridItem>



          </SimpleGrid>
        </Box>




      </Container>
    </UserLayout>
  )
}
