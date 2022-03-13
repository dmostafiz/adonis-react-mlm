import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

import { BiStats } from 'react-icons/bi'
import { ImTree } from 'react-icons/im'
import { AiOutlineDashboard } from 'react-icons/ai'


export default function SideMenu() {
    return (
        <List >
            <Link href='/user/dashboard'>
                <ListItem gap='2' mb='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={AiOutlineDashboard} w={5} h={5} />
                    Dashboard
                </ListItem>
            </Link>

            <Link href='/user/my_geneology'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={ImTree} w={5} h={4} />
                    My Geneology
                </ListItem>
            </Link>

            <Link href='/user/my_statistics'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={BiStats} w={5} h={5} />
                    Statistics Overview
                </ListItem>
            </Link>

        </List>
    )
}
