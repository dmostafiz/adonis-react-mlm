import { Box, Container, Flex, HStack, Image } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function TopNavigation() {
  return (
    <Box py={3} w='full' bg='purple.700'>
      <Container maxW='container.xl'>
        <Flex justify='space-between'>

          <HStack>
            <Link href='/'>
              <Image width={150} height={50} src='/logo.png' alt='Brand Logo' />
            </Link>

          </HStack>


          <HStack>

            {/* <Link href='/admin/dashboard'>
              <Box py={2} px={3} color='whiteAlpha.800' _hover={{ bg: 'blackAlpha.700' }} rounded='5px'>
                Admin
              </Box>
            </Link> */}

            {/* <Link href='/user/dashboard'>
              <Box py={2} px={3} color='whiteAlpha.800' _hover={{ bg: 'blackAlpha.700' }} rounded='5px'>
                Users
              </Box>
            </Link> */}

            <Link href='/auth/login'>
              <Box py={2} px={3} color='whiteAlpha.800' _hover={{ bg: 'blackAlpha.700' }} rounded='5px'>
                Login
              </Box>
            </Link>

            <Link href='/auth/join_now'>
              <Box py={2} px={3} color='whiteAlpha.800' _hover={{ bg: 'blackAlpha.700' }} rounded='5px'>
                Join Now
              </Box>
            </Link>

            {/* <Link href='/react-test'>
              <Box py={2} px={3} color='whiteAlpha.800' _hover={{ bg: 'blackAlpha.700' }} rounded='5px'>
                 Test React
              </Box>
            </Link> */}

          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
