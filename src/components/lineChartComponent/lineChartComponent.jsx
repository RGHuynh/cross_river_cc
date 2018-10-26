import React from 'react';
import './lineChartComponent.css';
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official';


function lineChartComponent() {

    // Highcharts.chart('container', {
    //     chart: {
    //     plotBorderColor: "#000000",
    //     plotBorderWidth: 1
    //     },
        
    //     xAxis: {
    //     labels: {
    //         rotation: 270
    //     },
        
    //     title: {
    //         text: 'Month'
    //     },
    //     dateTimeLabelFormats: {
    //         month: "%b"
    //     },
    //     min: Date.UTC(2010, 0, 0), 
    //     max: Date.UTC(2010, 11, 1),
    //     type: 'datetime',
    //     tickInterval: 24 * 3600 * 1000*30
    //     },
        
    //     title: {
    //     align: 'left',
    //     text: 'Loans By Credit Grade'
    //     },
    
    //     subtitle: {
    //     text: 'Loans Issued by Credit Score (Grade)'
    //     },
    
    //     yAxis: {
    //     gridLineWidth: 0,
    //     minorGridLineWidth: 0,
    //     tickWidth: 1,
    //     labels: {
    //         formatter: function () {
    //             return this.value;
    //         }
    //     },
    //     allowDecimals: false,
    //     tickInterval: 2500,
    //     title: {
    //         text: 'Avg Loan Amount'
    //     },
    //     tickAmount: 8,
    //     min: 0,
    //     max: 27500
    //     },
        
    //     legend: {
    //         title: {
    //             text: 'grade'
    //         },
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'top',
    //         x: -40,
    //         y: 80,
    //         floating: true,
    //         borderWidth: 1,
    //         backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    //         shadow: true
    //     },
    
    //     plotOptions: {
    //     line: {
    //         marker: {
    //         enabled: false
    //         }
    //     },
    //     series: {
    //         label: {
    //         connectorAllowed: false
    //         }
    //     }
    //     },
    
    //     series: [{
    //         name: 'Installation',
    //         data: [10000, 27500, 57177, 69658, 97031, 119931, 137133, 154175]
    //     }, {
    //         name: 'Manufacturing',
    //         data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    //     }, {
    //         name: 'Sales & Distribution',
    //         data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    //     }, {
    //         name: 'Project Development',
    //         data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    //     }, {
    //         name: 'Other',
    //         data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    //     }], 
    
    //     responsive: {
    //     rules: [{
    //         condition: {
    //         maxWidth: 500
    //         },
    //         chartOptions: {
    //         legend: {
    //             layout: 'horizontal',
    //             align: 'center',
    //             verticalAlign: 'bottom'
    //         }
    //         }
    //     }]
    //     }
    
    // });

    const options = {
        title: {
            text: 'my char'
        },
        series: [{
            data: [1,2,3]
        }]
    }
    return(
        <div>
            <HighchartReact 
            highcharts={Highcharts}
            options={options}
            />
        </div>
 
    );
}

export default lineChartComponent
