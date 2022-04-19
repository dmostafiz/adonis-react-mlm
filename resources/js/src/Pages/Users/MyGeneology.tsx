import { Box, Flex, FormControl, FormLabel, Heading, Icon, Text } from '@chakra-ui/react'
import React, { createRef, useEffect, useState } from 'react'
import UserLayout from '../../Layouts/UsersLayout/UserLayout'
import Geneology from '../../Components/UserPanel/Geneology/Geneology';
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard';
import { Switch } from '@chakra-ui/react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { AiOutlineDownload, AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function MyGeneology({ dataSource }) {
    // const WIDTH = 70;
    // const HEIGHT = 80;
    const screen = useFullScreenHandle();

    const ref = createRef()
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
        <UserLayout>

            <Box>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>My Geneology</Heading>
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
                <Box position='relative' width='100%' minHeight={screen.active ? '100vh' : '100vh'} bg='white' rounded='base' shadow='base' overflow='auto'>

                    <Box position='absolute' ref={ref as React.RefObject<HTMLDivElement>}>

                        {dataSource?.children?.length
                            ? <Geneology enableZoom={enableZoom} dataSource={dataSource} />
                            : <Flex direction='column' gap={2} p={5}>
                                <Text fontSize='xl' fontWeight='bold' color='gray.600'>Your geneology is empty</Text>
                                <Text fontSize='md' fontWeight='semibold' color='gray.400'>
                                    Start sharing your invitation link to make your geneology
                                </Text>

                                <ReferralClipboard />

                            </Flex>}
                    </Box>


                </Box>
            </FullScreen>

        </UserLayout>
    )
}
