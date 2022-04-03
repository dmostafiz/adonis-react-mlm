import { Avatar, Box, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { BiCog, BiLockOpen, BiPowerOff } from 'react-icons/bi'
import MainLogo from '../../../Components/MainLogo'
import SideMenu from './SideMenu'

import {HiOutlineMenuAlt1} from 'react-icons/hi'

export default function TopNavigation() {
  const { authUser } : any = usePage().props

  const [isMobile] = useMediaQuery('(max-width:1000px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box py={3} w='full' bg='purple.700' position='fixed' zIndex={999}>
      <Container maxW='container.xl'>
        <Flex justify='space-between'>

          <HStack>

            {isMobile && <>
              <Box as='span' cursor='pointer' color='white' onClick={onOpen}>
                 <Icon as={HiOutlineMenuAlt1} w={8} h={8}/>
              </Box>
              <Drawer
                size='xs'
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>

                    <MainLogo />

                  </DrawerHeader>

                  <DrawerBody>
                    <Input mb='20px' placeholder='Type here...' />

                    <SideMenu />

                  </DrawerBody>
                  ]
                </DrawerContent>
              </Drawer>
              <Spacer />
              <Spacer />
              <Spacer />
            </>}




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
                  <Avatar size='xs' mr={2} name={`${authUser?.first_name} ${authUser?.last_name}`} src='https://bit.ly/sage-adebayo' />
                  {authUser?.first_name} {authUser?.last_name}
                  {/* </Flex> */}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href='/'>
                      <Flex align='center' gap={2}>
                        <Icon as={BiCog} color='green.500' p={0} m={0} />
                        <Text color='gray.500'>Profile settings</Text>
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
                    <Link href="/logout" method="post"  as="form">
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
