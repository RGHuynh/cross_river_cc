import React from 'react';
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official';

function BarChartComponent(){

    const options = {
        plotOptions: {
        column: {
        colorByPoint: true
        }
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Loan Volume',
        align: 'left'
    },
    subtitle: {
        text: 'Lending Club - Monthly Loan Vloume for Year 2012'
    },
    xAxis: {
            title: {
            text: 'Month'
        },
        type: 'category',
        labels: {
            rotation: 270,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Loan Volume'
        },
        tickInterval: 1000
    },
    legend: {
        enabled: false
    },
    series: [{
        data: [
            ['a', 24.2],
            ['b', 20.8],
            ['c', 14.9],
            ['Shenzhen', 13.7],
            ['Guangzhou', 13.1],
            ['Istanbul', 12.7],
            ['Mumbai', 12.4],
            ['Moscow', 12.2],
            ['São Paulo', 12.0],
            ['Delhi', 11.7],
            ['Kinshasa', 11.5],
            ['Tianjin', 11.2],
            ['Lahore', 1001.1],
            ['Jakarta', 10.6],
            ['Dongguan', 10.6],
            ['Lagos', 10.6],
            ['Bengaluru', 10.3],
            ['Seoul', 9.8],
            ['Foshan', 9.3],
            ['Tokyo', 9.3]
        ]
    }]
}

    
    return(
        <div>
            <HighchartReact 
                highcharts={Highcharts}
                options={options}
            />
        </div>
        
    )
}

export default BarChartComponent