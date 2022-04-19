import React from 'react'
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";

export default function Geneology({ dataSource }): any {

    return (

        <OrganizationChart
            datasource={dataSource}
            chartClass="myChart"
            NodeTemplate={MyNode}
        />

    )
}
