import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

import { BiCategoryAlt, BiStats } from 'react-icons/bi'
// import { ImTree } from 'react-icons/im'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'


export default function SideMenu() {
    return (
        <List >
            <Link href='/admin/dashboard'>
                <ListItem gap='2' mb='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={AiOutlineDashboard} w={5} h={5} />
                    Dashboard
                </ListItem>
            </Link>

            {/* <Link href='/admin/my_geneology'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={ImTree} w={5} h={4} />
                    My Geneology
                </ListItem>
            </Link> */}

            <Link href='/admin/my_statistics'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={BiStats} w={5} h={5} />
                    Statistics Overview
                </ListItem>
            </Link>

            <Link href='/admin/packages'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={BiCategoryAlt} w={5} h={5} />
                    Packages
                </ListItem>
            </Link>

            <Link href='/admin/users'>
                <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                    <ListIcon as={FiUsers} w={5} h={5} />
                    Registered Users
                </ListItem>
            </Link>


        </List>
    )
}
