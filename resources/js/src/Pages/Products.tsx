import { Box, Container, GridItem, SimpleGrid, chakra, Image } from '@chakra-ui/react'
import React from 'react'
import UserLayout from '../Layouts/UsersLayout/UserLayout'

import {
  Heading,
  Avatar,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { Inertia } from '@inertiajs/inertia';

export default function Products({ products }) {

  const handleByProduct = (productId) => {

    Inertia.post('/user/buy_product',{productId})
  }

  return (

    <UserLayout>
      
      <Container maxW='container.xl'>

        <Box py={5} mx="auto">
          <SimpleGrid
            alignItems="center"
            w={{ base: "full", xl: 11 / 12 }}
            columns={{ base: 1, lg: 11 }}
            gap={{ base: 0, lg: 24 }}
          >
            <GridItem
              colSpan={{ base: "auto", lg: 6 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <chakra.h1
                mb={4}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", md: "none" }}
                // color={useColorModeValue("gray.900", "gray.200")}
                color='gray.900'
                letterSpacing={{ base: "normal", md: "tight" }}
              >
                Products
              </chakra.h1>
              <chakra.p
                mb={{ base: 10, md: 4 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="thin"
                color="gray.500"
                letterSpacing="wider"
              >
                Low-latency voice and video feels like you’re in the same room. Wave
                hello over video, watch friends stream their games, or gather up and
                have a drawing session with screen share.
              </chakra.p>
            </GridItem>

          </SimpleGrid>
        </Box>


        <Box  mx="auto">

          <SimpleGrid columns={{ base: 1, sm: 1,  md: 3, lg: 4 }} gap={4} >

            {products.map((product, index) => {
              
              return <Center key={index}>
                <Box
                  maxW={'320px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'md'}
                  rounded={'lg'}
                  p={4}
                  textAlign={'center'}>

                  <Image src={product.image} mb={3}/>

                  <Heading fontSize={'2xl'} fontFamily={'body'} mb={3}>
                    {product.name}
                  </Heading>

                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {product.content}
                  </Text>


                  <Stack mt={8} direction={'row'} spacing={4} justifyItems='center' alignItems='center'>

                    <Text>
                      ${product.price}
                    </Text>
    
                    <Button
                      onClick={() => handleByProduct(product.id) }
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      // boxShadow={
                      //   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      // }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}>
                      Buy Now
                    </Button>
                  </Stack>
                </Box>
              </Center>
            })}

          </SimpleGrid>
        </Box>


      </Container>
    </UserLayout>
  )
}
