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
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        colors:['#553C9A']
    }

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
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
                Referral Clicks
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



            <Chart options={options} series={series} type="line" />

        </>
    )
}
