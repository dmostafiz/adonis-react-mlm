import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from '@inertiajs/inertia-react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiCategoryAlt, BiStats } from 'react-icons/bi';
import { Box } from '@chakra-ui/react';
import { FiUsers } from 'react-icons/fi';

const { SubMenu } = Menu;

export default function SideMenu({ collapsed }) {


    // const [collapsed, setCollapsed] = useState(false)

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    //   };

    return (
        <Box shadow='xl'>
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}

            <Menu
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                style={{ height: '100vh' }}



            // overflowY='scroll'
            >
                <Menu.Item key="1" icon={<AiOutlineDashboard />}>
                    <Link href='/admin/dashboard'>
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<BiStats />}>
                    <Link href='/admin/my_statistics'>
                        Statistics Overview
                    </Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<BiCategoryAlt />}>
                    <Link href='/admin/packages'>
                        Member ranks
                    </Link>
                </Menu.Item>

                <Menu.Item key="4" icon={<FiUsers />}>
                    <Link href='/admin/users'>
                        Registered Users
                    </Link>
                </Menu.Item>

                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Dropdown menu">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
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
