import { Box, Container, GridItem, SimpleGrid, chakra, Center, Text, Flex, VisuallyHidden, Input, Button } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import GuestLayout from '../../Layouts/GuestLayout/GuestLayout'

export default function Login() {

  const { errors } = usePage().props

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  
  const handleSubmit = (e) => {
    //  alert(e)
    e.preventDefault()

    const loginData = {
      email, password
    }

    Inertia.post('/login', loginData)

  }


  return (
    <GuestLayout>
      <Container maxW='container.xl'>

        <Box py={10} mx="auto">
          <SimpleGrid
            alignItems="center"
            w={{ base: "full", xl: 11 / 12 }}
            columns={{ base: 1, lg: 11 }}
            gap={{ base: 0, lg: 24 }}
            mx="auto"
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
                Welcome back!
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



            <GridItem colSpan={{ base: "auto", md: 5 }}>

              {/* <Box>
                
              </Box> */}

              <Box as="form" py={3} mb={6} rounded="lg" shadow="xl">
                <Center pb={0} color='gray.700'>
                  <Text pt={2} fontWeight='bold' fontSize='20px'>Login to your account</Text>
                </Center>
                <SimpleGrid
                  columns={1}
                  px={6}
                  py={4}
                  spacing={4}
                  borderColor='gray.200'
                >

                  <Flex direction='column'>
                    <VisuallyHidden>Email Address</VisuallyHidden>
                    <Input
                      mt={0}
                      type="email"
                      placeholder="Email Address"
                      // required={true}
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                    />
                    {errors?.email && <Text color='red.400'>{errors?.email}</Text>}

                  </Flex>

                  {/* <HStack> */}
                  <Flex direction='column'>
                    <VisuallyHidden>Password</VisuallyHidden>
                    <Input
                      mt={0}
                      type="password"
                      placeholder="Password"
                      // required={true}
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                    />
                    {errors?.password && <Text color='red.400'>{errors?.password}</Text>}
                    {errors?.login && <Text color='red.400'>{errors?.login}</Text>}

                  </Flex>

                  {/* </HStack> */}

                  <Button onClick={e => handleSubmit(e)} colorScheme="purple" w="full" py={2} type="submit">
                    Sign in
                  </Button>
                </SimpleGrid>

              </Box>
              <chakra.p fontSize="xs" textAlign="center" color="gray.600">
                By signing up you agree to our{" "}
                <chakra.a color="brand.500">Terms of Service</chakra.a>
              </chakra.p>


            </GridItem>



          </SimpleGrid>
        </Box>




      </Container>
    </GuestLayout>
  )
}
