import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Footer from './inc/Footer'
import SideMenu from './inc/SideMenu'
import TopNavigation from './inc/TopNavigation'


export default function UserLayout({ children }) {

  const [isMobile] = useMediaQuery('(max-width:1000px)')

  return (
    <Flex direction='column' justify='space-between'>
      <TopNavigation />

      <Container maxW='container.xl' style={{ clear: 'both', overflowX: 'hidden' }}>


        <Flex color='white'>

          {!isMobile && <Box w='15%' borderRight='2px solid #553c9a0a' overflow='hidden'>
            <Box as='aside' px={0} position='fixed' pt='90px' h='100vh' overflow='hidden'>

              <SideMenu />

            </Box>
          </Box>}


          <Box color='gray.800' w={isMobile ? '100%' : '85%'} minH='100vh' bg={isMobile ? 'white' : 'purple.50'} dropShadow='md'>
            <Box px={isMobile ? 0 : 10} py='90px' minH='100vh'>
              {children}
            </Box>
            <Footer />
          </Box>


        </Flex>


      </Container>

    </Flex>
  )
}
