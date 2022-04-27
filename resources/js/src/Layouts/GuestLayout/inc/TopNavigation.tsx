import { Avatar, Box, Container, Flex, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { BiCog, BiLockOpen, BiPowerOff } from 'react-icons/bi'
import MainLogo from '../../../Components/MainLogo'

import { BsTextCenter, BsTextLeft } from 'react-icons/bs'

export default function TopNavigation({ toggleCollapsed, collapsed }) {

  const { authUser }: any = usePage().props

  return (
    <Box py={3} w='full' bg='#353535' position='fixed' zIndex={999999}>
      <Container maxW='container.2xl'>
        <Flex justify='space-between'>

          <HStack>

            <Icon color='white' cursor='pointer' mr={5} onClick={toggleCollapsed} as={collapsed ? BsTextLeft : BsTextCenter} w={8} h={8} />

            <Link href='/'>
              <MainLogo />
            </Link>
          </HStack>


          <HStack>

            {/* <Link href=''> */}
            <Flex py={2} px={3} gap={3} color='whiteAlpha.800' rounded='5px' cursor='pointer'>

              <Menu>
                {/* <MenuItem> */}
                  <Link href='/auth/login'>
                    Login
                  </Link>
                {/* </MenuItem> */}

                {/* <MenuItem> */}
                  <Link href='/auth/join_now'>
                    Sign up
                  </Link>
                {/* </MenuItem> */}

              </Menu>

            </Flex>
            {/* </Link> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
