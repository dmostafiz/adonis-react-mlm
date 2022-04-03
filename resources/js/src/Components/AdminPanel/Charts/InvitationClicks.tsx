import { chakra, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Chart from "react-apexcharts";

export default function InvitationClicks() {

    const options = {
        chart: {
            id: "basic-bar",
            width: '500px'
        },
        xaxis: {
            categories: ['18 Apr', '19 March', '20 March', '21 March', '22 March', '23 March', '24 March', '25 March']
        },
        colors: ['#553C9A']
    }

    const series = [
        {
            name: "Clicks",
            data: [30, 40, 45, 50, 49, 60, 40, 30]
        }
    ]

    return (
        <>

            <chakra.p
                mb={1}
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="wide"
                textTransform="uppercase"
                color={useColorModeValue("gray.500", "gray.400")}
            >
                Last 7 days statistics

            </chakra.p>
            <Text
                mb={2}
                fontSize="3xl"
                fontWeight={["bold", "extrabold"]}
                color={useColorModeValue("gray.900", "gray.50")}
                lineHeight="tight"
            >
                19
                <chakra.span
                    fontSize="md"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {" "}
                    Clicks
                </chakra.span>
            </Text>



            <Chart options={options} series={series} type="area" />

        </>
    )
}
