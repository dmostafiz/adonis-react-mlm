import { Flex, useColorModeValue, chakra, Text, Stack, Link, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function AccountInfoCards() {
    return (
        <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                // h='200px'
                templateRows='repeat(1, 1fr)'
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap={4}
                textAlign={["left", "center"]}
            >



                <GridItem
                    bg={useColorModeValue("white", "gray.800")}
                    px={4}
                    py={6}
                    shadow="base"
                    rounded="md"
                >
                    <chakra.p
                        mb={1}
                        fontSize="xs"
                        fontWeight="bold"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        color={useColorModeValue("gray.500", "gray.400")}
                    >
                        Registrations
                    </chakra.p>
                    <Text
                        mb={2}
                        fontSize="5xl"
                        fontWeight={["bold", "extrabold"]}
                        color={useColorModeValue("gray.900", "gray.50")}
                        lineHeight="tight"
                    >
                        3
                        <chakra.span
                            fontSize="2xl"
                            fontWeight="medium"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {" "}
                            Users
                        </chakra.span>
                    </Text>
                    <chakra.p
                        mb={6}
                        fontSize="lg"
                        // color={useColorModeValue("gray.600", "gray.500")}
                        color='gray.500'
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </chakra.p>
                    <Stack
                        display={["block", "flex"]}
                        spacing={2}
                        justifyContent="center"
                        direction={["column", "row"]}
                    >

                        <Link
                            w={["auto", "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={3}
                            py={2}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            color="whiteAlpha.800"
                            bg="purple.600"
                            _hover={{
                                bg: "purple.700",
                            }}
                        >
                            View Details
                        </Link>
                    </Stack>
              
              
              
                </GridItem>

               
               
                <GridItem
                    bg={useColorModeValue("white", "gray.800")}
                    px={4}
                    py={6}
                    shadow="base"
                    rounded="md"
                    // colSpan={[2, 2, 1]}

                >
                    <chakra.p
                        mb={1}
                        fontSize="xs"
                        fontWeight="bold"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        color={useColorModeValue("gray.500", "gray.400")}
                    >
                        Lasr Month Transactions
                    </chakra.p>
                    <Text
                        mb={2}
                        fontSize="5xl"
                        fontWeight={["bold", "extrabold"]}
                        color={useColorModeValue("gray.900", "gray.50")}
                        lineHeight="tight"
                    >
                        $19
                        <chakra.span
                            fontSize="2xl"
                            fontWeight="medium"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {" "}
                            USD
                        </chakra.span>
                    </Text>
                    <chakra.p
                        mb={6}
                        fontSize="lg"
                        // color={useColorModeValue("gray.600", "gray.500")}
                        color='gray.500'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </chakra.p>
                    <Stack
                        display={["block", "flex"]}
                        spacing={2}
                        justifyContent="center"
                        direction={["column", "row"]}
                    >

                        <Link
                            w={["auto", "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={3}
                            py={2}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            color="whiteAlpha.800"
                            bg="purple.600"
                            _hover={{
                                bg: "purple.700",
                            }}
                        >
                            View transactions
                        </Link>
                    </Stack>
                </GridItem>

            </Grid>
        </Flex>
    )
}
