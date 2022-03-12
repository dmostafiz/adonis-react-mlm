import { Box, Container, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
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
            <Box w='250px' px={0} position='fixed' pt='90px' h='100vh' >

              <SimpleGrid spacing={3}>

                <Link href='/user/dashboard'>
                  <Flex align='center' gap='2' color='gray.700' fontWeight='semibold' rounded='md' >
                    <Icon as={AiOutlineDashboard} color='purple.500' w={5} h={5} p={0} m={0} />
                    Dashboard
                  </Flex>
                </Link>

                <Link href='/user/my_statistics'>
                  <Flex align='center' gap='2' color='gray.700' fontWeight='semibold' rounded='md' >
                    <Icon as={BiStats} color='purple.500' w={5} h={5} p={0} m={0} />
                    <Text>My Statistics</Text>
                  </Flex>
                </Link>

                <Link href='/user/my_geneology'>
                  <Flex align='center' gap='2' color='gray.700' fontWeight='semibold' rounded='md' >
                    <Icon as={ImTree} color='purple.500' w={5} h={5} p={0} m={0} />
                    <Text>My Geneology</Text>
                  </Flex>
                </Link>

              </SimpleGrid>

            </Box>
          </Box>

          <Box flex='1' h='100vh' bg='purple.50' shadow='sm'>
            {children}
          </Box>
        </Flex>


      </Container>

    </Flex>
  )
}
