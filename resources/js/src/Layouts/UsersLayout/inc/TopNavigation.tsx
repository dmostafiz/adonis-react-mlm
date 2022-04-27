import { Avatar, Box, Container, Flex, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import { BiCog, BiLockOpen, BiPowerOff } from 'react-icons/bi'
import MainLogo from '../../../Components/MainLogo'
import { BsTextCenter, BsTextLeft } from 'react-icons/bs'


export default function TopNavigation({ toggleCollapsed, collapsed }) {
  const { authUser }: any = usePage().props

  useEffect(() => {
    console.log('Auth User: ', authUser)
  }, [])

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

        
              {authUser && <Menu>
                <MenuButton as='a' gap={2}>
                  {/* Actions */}

                  {/* <Flex align='center' gap={2}> */}
                  <Avatar size='xs' mr={2} name={`${authUser?.first_name} ${authUser?.last_name}`} src='https://bit.ly/sage-adebayo' />
                  {authUser?.first_name} {authUser?.last_name}
                  {/* </Flex> */}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href='/user/profile'>
                      <Flex align='center' gap={2}>
                        <Icon as={BiCog} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Profile</Text>
                      </Flex>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/'>
                      <Flex align='center' gap={2}>
                        <Icon as={BiLockOpen} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Change Password</Text>
                      </Flex>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/logout" method="post" as="form">
                      <Flex align='center' gap={2}>
                        <Icon as={BiPowerOff} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Sign Out</Text>
                      </Flex>
                    </Link>
                  </MenuItem>

                </MenuList>

              </Menu>}

              {!authUser && <>
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
              </>}

            {/* </Link> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
