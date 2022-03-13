import { Box, Container, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Footer from './inc/Footer'
import SideMenu from './inc/SideMenu'
import TopNavigation from './inc/TopNavigation'


export default function UserLayout({ children }) {

  const [isMobile] = useMediaQuery('(max-width:600px)')
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Flex direction='column' justify='space-between'>
      <TopNavigation />

      <Container maxW='container.xl' overflowX='hidden'>



        <Flex color='white'>

          {!isMobile && <Box w='200px' position='relative'>
            <Box px={0} position='fixed' pt='90px' h='100vh' >

              <SideMenu />

            </Box>
          </Box>}





          <Box color='gray.800' flex='1' minH='100vh' bg={isMobile ? 'white' : 'purple.50'} shadow='sm'>
            <Box px={isMobile ? 2 : 5} py='90px' minH='100vh'>
              {children}
            </Box>
            <Footer />
          </Box>
        </Flex>


      </Container>

    </Flex>
  )
}
