import { chakra, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Chart from "react-apexcharts";

export default function InvitationRegistrations() {

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [ '19 March', '20 March', '21 March', '22 March', '23 March', '24 March', '25 March']
        },
        colors:['#F44336', '#E91E63', '#9C27B0']
    }

    const series = [
        {
            name: "Registrations",
            data: [0, 3, 0, 1, 2, 1, 0]
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
                7
                <chakra.span
                    fontSize="md"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {" "}
                    Registrations
                </chakra.span>
            </Text>



            <Chart options={options} series={series} type="area" />

        </>
    )
}
