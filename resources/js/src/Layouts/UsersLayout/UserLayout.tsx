import { Box, Container, Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { ImTree } from 'react-icons/im'
import { AiOutlineDashboard } from 'react-icons/ai'

import Footer from './inc/Footer'
import TopNavigation from './inc/TopNavigation'
import { BiStats } from 'react-icons/bi'

export default function UserLayout({ children }) {

  return (
    <Flex direction='column' justify='space-between'>
      <TopNavigation />

      <Container maxW='container.xl' overflowX='hidden'>



        <Flex color='white'>
          <Box w='200px' position='relative'>
            <Box px={0} position='fixed' pt='90px' h='100vh' >

              <List >

                <Link href='/user/dashboard'>
                  <ListItem gap='2' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={AiOutlineDashboard} w={5} h={5} />
                    Dashboard
                  </ListItem>
                </Link>

                <Link href='/user/my_statistics'>
                  <ListItem gap='2' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={BiStats} w={5} h={5} />
                    My Statistics
                  </ListItem>
                </Link>

                <Link href='/user/my_geneology'>
                  <ListItem gap='2' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={ImTree} w={5} h={4} />
                    My Geneology
                  </ListItem>
                </Link>

              </List>

            </Box>
          </Box>

          <Box color='gray.800' flex='1' minH='100vh' bg='purple.50' shadow='sm'>
            <Box px={5} py='90px' minH='100vh'>
              {children}
            </Box>
            <Footer />
          </Box>
        </Flex>


      </Container>

    </Flex>
  )
}
