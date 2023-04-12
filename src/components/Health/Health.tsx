import {useEffect} from 'react'
import { Collapse } from 'antd'
import Highcharts from "highcharts/highstock";
import bullet from "highcharts/modules/bullet.js";
import HighchartsReact from "highcharts-react-official";

const { Panel } = Collapse


bullet(Highcharts)


const options = {
    chart: {
        marginTop: 40,
        inverted: true,
        type: "bullet"
    },

    plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
            height: "20px",
            color: "#00000",
            targetOptions: {
                width: "50px"
            }
        },
        line: {
            color: "pink"
        }
    },
    legend: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 0,
        plotBands: [
            {
                from: 0,
                to: 50,
                color: "#DF5353"
            },
            {
                from: 50,
                to: 70,
                color: "#DDDF0D"
            },
            {
                from: 70,
                to: 100,
                color: "#55BF3B"
            }
        ],
        title: "Healthscore"
    },
    series: [
        {
            data: [
                {
                    y: 90.4,
                    target: 80
                }
            ]
        }
    ],
    tooltip: {
        pointFormat: "<b>{point.y}</b> (with target at {point.target})"
    }
};

const mystyle = {
    "& .highcharts-container": {
        height: "115px",
        width: "110%"
    }
};
export const Health = () => {
    return (
        <Collapse>
            <Panel header="Health" key={1}>
                <div>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </Panel>
        </Collapse>
    )
}
