import React from 'react'
import { Menu } from 'antd';
import { Link } from '@inertiajs/inertia-react';
import { BiHomeAlt } from 'react-icons/bi';
import { Box } from '@chakra-ui/react';
import { BsCartCheck } from 'react-icons/bs';
import {FaBlog} from 'react-icons/fa'

// const { SubMenu } = Menu;

export default function SideMenu({ collapsed }) {


    // const [collapsed, setCollapsed] = useState(false)

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    //   };

    return (
        <Box shadow='xl' background='purple.50' >
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                style={{
                    width: '100%',
                    height: '100vh',
                    background: 'linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)',
                    color: 'white'
                }}
            >
                <Menu.Item key="1" icon={<BiHomeAlt />}>
                    <Link href='/'>
                        {!collapsed && <Box width={'120px'}>
                        </Box>}
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<BsCartCheck />} style={{ width: '100% !important' }}>
                    <Link href='/products' style={{ width: '100% !important' }}>
                        Products
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<FaBlog />}>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </Menu.Item>

            </Menu>

            {/* <List >
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

                <Link href='/user/my_network'>
                    <ListItem gap='2' my='10px' py='5px' pr='20px' color='gray.700' _hover={{ color: 'purple.600' }} fontWeight='semibold'>
                        <ListIcon as={BiNetworkChart} w={5} h={5} />
                        My Network
                    </ListItem>
                </Link>


            </List> */}
        </Box>

    )
}
