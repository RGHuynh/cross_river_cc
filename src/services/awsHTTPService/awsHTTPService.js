import axios from 'axios';
export default function AwsHTTPService() {

    var service = {
       params: params,
       get_aws_s3_content: get_aws_s3_content,
       body_data: body_data,
       loanAvgParams: loanAvgParams,
       getAwsLoanAvg: getAwsLoanAvg,
       loanVolume: loanVolume

    }

    return service;

    ///////

    function body_data(column, year) {
        let body_data = {
            body: {
                column: column,
                year: year
            }
        }
        return body_data
    }

    function params(column, year) {
       let  params_data = {
                method: "GET",
                url: "https://w8vn537gvi.execute-api.us-east-1.amazonaws.com/prod/loans?column=" + column +"&year=" + year,
                dataType: "json",
                contentType: "application/json"
        }
        return params_data;
    }

    function get_aws_s3_content(config) {
        return axios(config)
    }  

    function getAwsLoanAvg(config) {
        return axios(config)
    }

    function loanAvgParams(year, grade, month) {
        let  params_data = {
                 method: "GET",
                 url: "https://w8vn537gvi.execute-api.us-east-1.amazonaws.com/prod/loanavg?year=" + year +"&grade=" + grade + "&month=" + month,
                 dataType: "json",
                 contentType: "application/json"
         }
         return params_data;
     }

     function loanVolume(year, month) {
         let params_data = {
            method: "GET",
            url: "https://w8vn537gvi.execute-api.us-east-1.amazonaws.com/prod/loanvolume?year=" + year +"&month=" + month,
            dataType: "json",
            contentType: "application/json"
        }
        return params_data;
     }
    
}