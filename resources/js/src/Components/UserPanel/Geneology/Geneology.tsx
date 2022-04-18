import React from 'react'
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";

export default function Geneology({ dataSource }): any {

    return (

        <OrganizationChart
            style={{ width: '50px !important' }}
            width='500px'
            datasource={dataSource}
            chartClass="myChart"
            NodeTemplate={MyNode}
        />

    )
}
