// @ts-ignore
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import AccountInfoCards from '../../Components/UserPanel/Dashboard/AccountInfoCards'
import ReferralClipboard from '../../Components/UserPanel/Dashboard/ReferralClipboard'
import UsersList from '../../Components/UserPanel/Dashboard/UsersList'

import UserLayout from '../../Layouts/UsersLayout/UserLayout'

export default function Dashboard({ childUsers, clicks }: any) {
    // @ts-ignore
    const { authUser }: any = usePage().props

    const [showAdvance, setShiwAdvance] = useState(false)

    const [shareLinks, setShareLinks] = useState(authUser.share_links)

    const updateShareLinks = () => {
        Inertia.post('/user/update_share_link', { shareLinks }, { preserveScroll: true })
    }

    return (
        <UserLayout>


            <Box w='full'>
                <Heading as='h4' fontWeight='semibold' fontSize='28px'>Dashboard</Heading>
                <Text>Hello {authUser?.first_name}! welcome to your dashboard</Text>
            </Box>

            <Box w='full' mt='50px'>
                <AccountInfoCards childUsers={childUsers} clicks={clicks} />
            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px'>
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Invitation link</Heading>
                <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text>
                <ReferralClipboard />
                <Box py={3}>
                    <Button cursor='pointer' onClick={() => setShiwAdvance(!showAdvance)}>{!showAdvance ? 'Show advance links' : 'Hide advance links'} </Button>
                </Box>
                {showAdvance && <Box px={5}>
                    <Box py={8}>
                        <Text>Organise links (must be seperated with comma)</Text>
                        <Box display='flex' justifyItems='center' gap={2}>
                            <Input maxWidth={500} value={shareLinks} onChange={e => setShareLinks(e.target.value)} placeholder='' />
                            <Button onClick={updateShareLinks}>Update</Button>
                        </Box>
                    </Box>

                    {shareLinks.split(',').map((lnk: any, index: any) =>
                    lnk && <Box key={index}>
                        <Text>{lnk}</Text>
                        <ReferralClipboard key={index} source={lnk} />
                    </Box>)}

                    {/* <Box>
                        <Text>Facebook</Text>
                        <ReferralClipboard source='facebook' />
                    </Box>
                    <Box>
                        <Text>Twitter</Text>
                        <ReferralClipboard source='twitter' />
                    </Box>
                    <Box>
                        <Text>Youtube</Text>
                        <ReferralClipboard source='youtube' />
                    </Box>
                    <Box>
                        <Text>Linked In</Text>
                        <ReferralClipboard source='linkedin' />
                    </Box> */}
                </Box>}

            </Box>

            <Box w='full' mt='20px' bg='white' rounded='md' shadow='base' pt='25px' pb='20px' px='15px' >
                <Heading mb={2} fontSize='2xl' fontWeight='semibold'>Recent registrations</Heading>
                {/* <Text mb={5} color='gray.500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis.</Text> */}
                <UsersList userList={childUsers} />
            </Box>


        </UserLayout>
    )
}
