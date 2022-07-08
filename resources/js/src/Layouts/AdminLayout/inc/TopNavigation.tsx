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
            <Box py={2} px={3} color='whiteAlpha.800' rounded='5px' cursor='pointer'>

              <Menu>
                <MenuButton as='a' gap={2}>
                  {/* Actions */}

                  {/* <Flex align='center' gap={2}> */}
                  <Avatar size='xs' mr={2} name={`${authUser.first_name} ${authUser.last_name}`} src='' />

                  {authUser.first_name} {authUser.last_name}

                  {/* </Flex> */}
                </MenuButton>
                <MenuList>
                  {/* <MenuItem>
                    <Link href='/'>
                      <Flex align='center' gap={2}>
                        <Icon as={BiCog} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Profile settings</Text>
                      </Flex>
                    </Link>
                  </MenuItem> */}
                  {/* <MenuItem>
                    <Link href='/'>
                      <Flex align='center' gap={2}>
                        <Icon as={BiLockOpen} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Change Password</Text>
                      </Flex>
                    </Link>
                  </MenuItem> */}
                  <MenuItem>
                    <Link href="/logout" method="post" as="button">
                      <Flex align='center' gap={2}>
                        <Icon as={BiPowerOff} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Sign Out</Text>
                      </Flex>
                    </Link>
                  </MenuItem>

                </MenuList>

              </Menu>

            </Box>
            {/* </Link> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
