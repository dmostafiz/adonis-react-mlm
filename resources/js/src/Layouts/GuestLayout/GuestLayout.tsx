// import FlashMessages from '../../Components/FlashMessage'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from './inc/Footer'
import SideMenu from './inc/SideMenu'
import TopNavigation from './inc/TopNavigation'
import { usePage } from '@inertiajs/inertia-react'


export default function GuestLayout({ children }) {

  const { successMsg }: any = usePage().props

  console.log('Unhandalled Success MEssage: ', successMsg)

  const [isMobile] = useMediaQuery('(max-width:1000px)')

  const [collapsed, setCollapsed]: any = useState(isMobile ? true : false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <Flex direction='column' justify='space-between'>
      <TopNavigation toggleCollapsed={toggleCollapsed} collapsed={collapsed} />

      {/* <Container maxW='container.xl' style={{ clear: 'both', overflowX: 'hidden' }}> */}

      <Flex color='purple.50'>

        {/* {!isMobile &&  */}
        <Box as='aside' zIndex={9999} px={0} width={collapsed ? '80px' : '210px'} pt='74px' h='100vh' overflow='hidden'>
          <Box style={{ position: 'fixed', height: '100vh', zIndex: 999, overflowY: 'auto' }} bg='purple.50'>
            <SideMenu collapsed={collapsed} />
          </Box>
        </Box>

        {/* } */}


        <Box color='gray.800' w={isMobile ? '80%' : '100%'} minH='100vh' bg={isMobile ? 'white' : 'purple.50'} dropShadow='md'>
          <Box px={isMobile ? 5 : 10} py='90px' minH='100vh'>
            {children}
          </Box>
          <Footer />
        </Box>


      </Flex>

      {/* {successMsg && <FlashMessages flash={successMsg} type='success'/>} */}
      

      {/* </Container> */}

    </Flex>
  )
}
