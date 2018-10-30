import React from 'react';
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official';

function BarChartComponent(props){

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
        text: 'Lending Club - Monthly Loan Volume for Year 2012'
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
            ['Jan', props.monthDatas.Jan],
            ['Feb', props.monthDatas.Feb],
            ['Mar', props.monthDatas.Mar],
            ['Apr', props.monthDatas.Apr],
            ['May', props.monthDatas.May],
            ['Jun', props.monthDatas.Jun],
            ['Jul', props.monthDatas.Jul],
            ['Aug', props.monthDatas.Aug],
            ['Sept', props.monthDatas.Sept],
            ['Oct', props.monthDatas.Oct],
            ['Nov', props.monthDatas.Nov],
            ['Dec', props.monthDatas.Dec]
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