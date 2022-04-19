import React from 'react'
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";

export default function Geneology({enableZoom = false, dataSource }): any {

    return (

        <OrganizationChart
            // height="100vh"
            datasource={dataSource}
            chartClass="myChart"
            NodeTemplate={MyNode}
            pan={true}
            zoom={enableZoom}
        />

    )
}
