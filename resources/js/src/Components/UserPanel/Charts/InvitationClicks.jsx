import { Box, Center, chakra, Flex, Select, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


export default function InvitationClicks() {

    const [categories, setCategories] = useState([])
    const [chartData, setChartData] = useState([])
    const [clickCount, setClickCount] = useState(0)

    const [loading, setLoading] = useState(true)


    const options = {
        chart: {
            id: "basic-bar",
            width: '500px'
        },
        xaxis: {
            categories: categories
        },
        colors: ['#553C9A']
    }

    const series = [
        {
            name: "Clicks",
            data: chartData
        }
    ]

    const [option, setOption] = useState('7days')

    useEffect(async () => {

        const res = await axios.get(`/api/invitation_clicks/?option=${option}`)
        // console.log('Response: ', res.data)
        if (res.data) {
            setTimeout(() => {
                setCategories(res.data.categories)
                setChartData(res.data.chartData)
                setClickCount(res.data.clickCount)
                setLoading(false)
            }, 100)
        }


    }, [option])


    return (
        <>

            <Box pb='5px' mb='25px' borderBottom='1px solid #E7E3F0'>
                <chakra.p
                    mb={1}
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing="wide"
                    textTransform="uppercase"
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    Last {option == '7days' ? '7 days' : option == '30days' ? '30 days' : '12 months'}  statistics

                </chakra.p>

                <Flex justify='space-between'>
                    <Text
                        mb={2}
                        fontSize="3xl"
                        fontWeight={["bold", "extrabold"]}
                        color={useColorModeValue("gray.900", "gray.50")}
                        lineHeight="tight"
                    >
                        {clickCount}
                        <chakra.span
                            fontSize="md"
                            fontWeight="medium"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {" "}
                            Clicks
                        </chakra.span>
                    </Text>

                    <Select onChange={(e) => setOption(e.target.value)} value={option} w='auto' size='xs' >
                        <option value='7days'>Last 7 days</option>
                        <option value='30days'>Last 30 days</option>
                        <option value='12months'>Last 12 months</option>
                    </Select>
                </Flex>
            </Box>


            {loading ? <Center h='50%'>
                <Spinner size='xl' />
            </Center> : chartData.length ? <Chart
                options={options}

                series={series}

                type="area"
            /> : <Center h='100px'>No data initialised</Center>}



        </>
    )
}
