import { Avatar, Badge, Box, Button, Center, Flex, FormControl, FormLabel, Heading, Icon, Switch, Text } from '@chakra-ui/react'
import moment from 'moment'
import React, { createRef, useEffect, useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Geneology from '../../Components/UserPanel/Geneology/Geneology'
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout'
import { useScreenshot } from 'use-react-screenshot';
import { createFileName } from 'use-react-screenshot';
import { AiOutlineDownload, AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'

export default function User({ dataSource, levels, user, totalReferences }) {

    // const {userId} = usePage().props
    const screen = useFullScreenHandle();

    const ref = createRef();
    const [, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "geneology", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
        return
    };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    useEffect(() => {
        console.log('dataSource: ', screen)
    }, [screen])

    const [enableZoom, setEnableZoom] = useState(false)

    return (
        <AdminLayout>

            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>User Profile</Heading>
            </Box>

            <Flex color='gray.700' gap={3} mt={10}>
                <Flex height='250px' flex='1' justify='center' direction='column' alignItems='center' p={5} bg='white'>
                    <Avatar size='2xl' mb={2} name={`${user.first_name} ${user.last_name}`} src='' />
                    <Text as='h2' fontSize='2xl'>{`${user.first_name} ${user.last_name}`}</Text>
                </Flex>


                <Box flex='2' py={3} px={5} bg='white'>
                    <Text as='h2' fontSize='xl' fontWeight='bold'>Profile Info</Text>

                    <Box w='100%' mt={4}>
                        <Flex w='100%' justifyContent='space-between' p={2} borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Join Data</Text>
                            <Text>{moment(user.createdAt).format('l')}</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' p={2} borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Name</Text>
                            <Text>{`${user.first_name} ${user.last_name}`}</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' align='center' p={2} borderBottom='0px solid #2d374814'>
                            <Text fontWeight='semibold'>Email</Text>
                            <Text>{user.email}</Text>
                        </Flex>

                    </Box>
                </Box>

                <Box flex='2' py={3} px={5} bg='white'>
                    <Text as='h2' fontSize='xl' fontWeight='bold'>Account</Text>

                    <Box w='100%' mt={4}>

                        <Flex w='100%' justifyContent='space-between' p={2} borderBottom='1px solid #2d374814'>
                            <Text fontWeight='semibold'>Total references</Text>
                            <Text>{totalReferences} members</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' align='center' p={2} borderBottom='0px solid #2d374814'>
                            <Text fontWeight='semibold'>Package</Text>
                            <Badge colorScheme='purple' variant='solid'>{user.package.package}</Badge>
                        </Flex>

                    </Box>

                    <Box w='100%' mt={4}>

                        <Flex w='100%' justifyContent='space-between'>
                            <Button colorScheme='teal' variant='solid'>Change Package</Button>
                            {/* <Button colorScheme='red' variant='solid'>Block User</Button> */}
                        </Flex>
                    </Box>
                </Box>

            </Flex>



            <Box mt='30px' p={3} w='full' minH='300px' bg='white' rounded='base' shadow='base'>
                <Box>
                    <Heading as='h4' fontWeight='semibold' fontSize='20px'>Level record</Heading>
                </Box>
                <Box flex='3' py={3} bg='white'>
                    <Box w='100%'>


                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level One</Text>
                            <Text>{levels.levelOne} members </Text>
                            <Text>({user.package.level_one}% profit)</Text>

                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level Two</Text>
                            <Text>{levels.levelTwo} members</Text>
                            <Text>({user.package.level_two}% profit)</Text>

                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level Three</Text>
                            <Text>{levels.levelThree} members</Text>
                            <Text>({user.package.level_three}% profit)</Text>

                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level Four</Text>
                            <Text>{levels.levelFour} members</Text>
                            <Text>{user.package.level_four}% profit)</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level Five</Text>
                            <Text>{levels.levelFive} members</Text>
                            <Text>({user.package.level_five}% profit)</Text>
                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' borderBottom='1px solid #2d374814'>
                            <Text>Level Six</Text>
                            <Text>{levels.levelSix} members</Text>
                            <Text>({user.package.level_six}% profit)</Text>

                        </Flex>

                        <Flex w='100%' justifyContent='space-between' px={2} py='2px' >
                            <Text>Level Seven</Text>
                            <Text>{levels.levelSeven} members</Text>
                            <Text>({user.package.level_seven}% profit)</Text>

                        </Flex>
                    </Box>
                </Box>


            </Box>



            <FullScreen handle={screen}>
                <Box py={5} px={5} bg='white' mt='30px'>
                    <Flex>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Enable Zooming
                            </FormLabel>
                            <Switch onChange={() => setEnableZoom(!enableZoom)} id='email-alerts' />
                        </FormControl>

                        <Icon fontSize='22px' mr={5} cursor='pointer' onClick={downloadScreenshot} as={AiOutlineDownload} />

                        {screen.active == false
                            ? <Icon fontSize='22px' cursor='pointer' onClick={screen.enter} as={AiOutlineFullscreen} />
                            : <Icon fontSize='22px' cursor='pointer' onClick={screen.exit} as={AiOutlineFullscreenExit} />}


                    </Flex>
                </Box>
                <Box position='relative' width='100%' minHeight={dataSource?.children?.length ? '100vh' : '200px'} bg='white' rounded='base' shadow='base' overflow='auto'>

                    <Box position='absolute' ref={ref as React.RefObject<HTMLDivElement>}>

                        {dataSource?.children?.length
                            ? <Geneology enableZoom={enableZoom} dataSource={dataSource} />
                            : <Flex direction='column' gap={2} p={5}>
                                <Center>
                                    <Text fontSize='xl' fontWeight='semibold' color='gray.600'>Geneology not created</Text>
                                </Center>
                            </Flex>}
                    </Box>


                </Box>
            </FullScreen>

        </AdminLayout>
    )
}
