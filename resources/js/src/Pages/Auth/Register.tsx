import { Box, Container, GridItem, SimpleGrid, chakra, Text, Center, Flex, VisuallyHidden, Input, Button } from '@chakra-ui/react'
// import { Inertia } from '@inertiajs/inertia'
import { useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'
import { useMoralis } from 'react-moralis';

export default function Register() {

  const { errors, ref_inv, src_inv }: any = usePage().props

  const { signup, isAuthenticated } = useMoralis()

  const { data, setData, post, processing } : any = useForm({
    first_name: '',
    last_name: '',
    email: '',
    ref_id: ref_inv && ref_inv,
    source: src_inv && src_inv,
    password: '',
    confirmPassword: ''
  })

  console.log('usePage().props: ', usePage().props?.errors)


  const handleSubmit = async (e) => {
    //  alert(e)
    e.preventDefault()


    post('/register', data)

    //  signup( data.email, data.password )

  }


  return (
    <UserLayout>
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
                {isAuthenticated ? 'You are authenticated with Moralis' : 'Ready to start your journey?'} 
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

              <Box as="form" py={3} mb={6} rounded="lg" shadow="xl">
                <Center pb={0} color='gray.700'>
                  <Text pt={2} fontWeight='bold' fontSize='20px'>Create your account now</Text>
                </Center>
                <SimpleGrid
                  columns={1}
                  px={6}
                  py={4}
                  spacing={4}
                  borderColor='gray.200'
                >

                  <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} gap={3}>
                    <Flex direction='column'>
                      <VisuallyHidden>First Name</VisuallyHidden>
                      <Input
                        mt={0}
                        type="text"
                        placeholder="First Name"
                        // required={true}
                        onChange={e => setData({...data, first_name: e.target.value})}
                        value={data.first_name}
                      />

                      {errors?.first_name && <Text color='red.400'>{errors?.first_name}</Text>}
                    </Flex>

                    <Flex direction='column'>
                      <VisuallyHidden>Last Name</VisuallyHidden>
                      <Input
                        mt={0}
                        type="text"
                        placeholder="Last Name"
                        // required={true}
                        onChange={e => setData({...data, last_name: e.target.value})}
                        value={data.last_name}
                      />
                      {errors?.last_name && <Text color='red.400'>{errors?.last_name}</Text>}

                    </Flex>
                  </Flex>


                  <Flex direction='column'>
                    <VisuallyHidden>Email Address</VisuallyHidden>
                    <Input
                      mt={0}
                      type="email"
                      placeholder="Email Address"
                      // required={true}
                      onChange={e => setData({...data, email: e.target.value})}
                      value={data.email}
                    />
                    {errors?.email && <Text color='red.400'>{errors?.email}</Text>}

                  </Flex>

                  <Flex direction='column'>
                    <VisuallyHidden>Reference ID</VisuallyHidden>
                    <Input
                      mt={0}
                      type="text"
                      placeholder="Reference ID"
     
                      onChange={e => setData({...data, ref_id: e.target.value})}
                      value={data.ref_id}
                    // required={true}
                    />
                    {errors?.ref_id && <Text color='red.400'>{errors?.ref_id}</Text>}

                  </Flex>

                  {/* <HStack> */}
                  <Flex direction='column'>
                    <VisuallyHidden>Password</VisuallyHidden>
                    <Input
                      mt={0}
                      type="password"
                      placeholder="Password"
                      // required={true}
                      onChange={e => setData({...data, password: e.target.value})}
                      value={data.password}
                    />
                    {errors?.password && <Text color='red.400'>{errors?.password}</Text>}

                  </Flex>

                  <Flex direction='column'>
                    <VisuallyHidden>Confirm Password</VisuallyHidden>
                    <Input
                      mt={0}
                      type="password"
                      placeholder="Confirm Password"
                      // required={true}
                      onChange={e => setData({...data, confirmPassword: e.target.value})}
                      value={data.confirmPassword}
                    />
                  </Flex>

                  {/* </HStack> */}

                  <Button
                    onClick={e => handleSubmit(e)}
                    isLoading={processing}
                    loadingText='Creating account'
                    colorScheme='purple'
                    variant='solid'
                    spinnerPlacement='end'
                  >
                    Sign up for free
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
    </UserLayout>
  )
}
