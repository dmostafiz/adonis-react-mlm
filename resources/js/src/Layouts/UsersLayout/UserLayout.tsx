import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Footer from './inc/Footer'
import SideMenu from './inc/SideMenu'
import TopNavigation from './inc/TopNavigation'


export default function UserLayout({ children }) {

  const [isMobile] = useMediaQuery('(max-width:900px)')

  return (
    <Flex direction='column' justify='space-between'>
      <TopNavigation />

      <Container maxW='container.xl' overflowX='hidden'>



        <Flex color='white'>

          {!isMobile && <Box w='210px'  borderRight='2px solid #553c9a0a' position='relative'>
            <Box px={0} position='fixed' pt='90px' h='100vh' >

              <SideMenu />

            </Box>
          </Box>}


          <Box color='gray.800' flex='1' minH='100vh' bg={isMobile ? 'white' : '#faf5ff85'} dropShadow='md'>
            <Box px={isMobile ? 0 : 14} py='90px' minH='100vh'>
              {children}
            </Box>
            <Footer />
          </Box>

          
        </Flex>


      </Container>

    </Flex>
  )
}
