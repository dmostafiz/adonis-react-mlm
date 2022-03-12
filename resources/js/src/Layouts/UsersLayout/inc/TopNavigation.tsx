import { Avatar, Box, Container, Flex, HStack, Image, LinkBox, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { BiCog, BiLockOpen, BiPowerOff } from 'react-icons/bi'

export default function TopNavigation() {
  return (
    <Box py={3} w='full' bg='purple.700' position='fixed' zIndex={999}>
      <Container maxW='container.xl'>
        <Flex justify='space-between'>

          <HStack>
            <Link href='/'>
              <Image width={150} height={50} src='/logo.png' alt='Brand Logo' />
            </Link>
          </HStack>


          <HStack>

            {/* <Link href=''> */}
            <Box py={2} px={3} color='whiteAlpha.800' rounded='5px' cursor='pointer'>
              <div className="dropdown">
                <Flex align='center' gap={2} tabIndex={0} className=" cursor-pointer">
                  <Avatar size='xs' name='Test User' src='https://bit.ly/sage-adebayo' />
                  Test User
                </Flex>
                <List tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52 -right-20 top-10 text-gray-500">
                  <ListItem>
                    <LinkBox px='8px' py='5px' _focus={{ bg: 'blackAlpha.500'}}>
                      <ListIcon as={BiCog} color='green.500' p={0} m={0} />
                      Profile settings
                    </LinkBox>
                  </ListItem>

                  <ListItem>
                    <LinkBox px='8px' py='5px'>
                      <ListIcon as={BiLockOpen} color='green.500' p={0} m={0} />
                      Change Password
                    </LinkBox>
                  </ListItem>

                  <ListItem>
                    <LinkBox  px='8px' py='5px'>
                      <ListIcon as={BiPowerOff} color='green.500' p={0} m={0} />
                      Sign Out
                    </LinkBox>
                  </ListItem>
                </List>
              </div>

            </Box>
            {/* </Link> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
