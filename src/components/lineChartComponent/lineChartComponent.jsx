import React from 'react';
import './lineChartComponent.css';
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official';


function lineChartComponent(props) {
    const options = {
        chart: {
            type: "line"
          },
          title: {
            text: "Loans By Credit Grade",
            align: "left"
          },
          subtitle: {
            text: "Loans Issued by Credit Score (Grade)"
          },
          legend: {
            title: {
              text: 'grade'
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF'
          },
        
          xAxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            labels: {
              rotation: 270
            }
          },
          yAxis: {
            title: {
              text: "Avg Loan Amount"
            },
            tickerInterval: 2500,
            tickAmount: 8
          },
          plotOptions: {
            line: {
              marker: {
                enabled: false
              }
            }
          },
          series: [
            {
                name: "A",
                data: props.loanDatas["A"]
            },
            {
                name: "B",
                data: props.loanDatas["B"]
            },
            {
                name: "C",
                data: props.loanDatas["C"]
            },
            {
                name: "D",
                data: props.loanDatas["D"]
            },
            {
                name: "E",
                data: props.loanDatas["E"]
            },
            {
                name: "F",
                data: props.loanDatas["F"]
            },
            {
                name: "G",
                data: props.loanDatas["G"]
            }
          ]
    };

    return(
        <div className="linechart--wrapper">
            <HighchartReact 
            highcharts={Highcharts}
            options={options}
            />
        </div>
 
    );
}

export default lineChartComponent
