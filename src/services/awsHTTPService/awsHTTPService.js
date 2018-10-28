// import AWS from 'aws-sdk';

// export default function AwsHTTPService() {

//     var service = {
//         get_aws_s3_content: get_aws_s3_content
//     }

//     return service;

//     ///////
//     function config_aws() {
//         AWS.config.update({
//             accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//             secretAccessKey: process.env.REACT_APP_AWS_SECRETE_KEY
//         })
//     }
 
//     function set_params(sql_command){
//         return({
//             Bucket: "lcl-data-storage2",
//             Key: "loan.csv.gz",
//             ExpressionType: "SQL",
//             Expression: sql_command,
//             InputSerialization: {
//                 CSV: {
//                     FileHeaderInfo: "USE"
//                 },
//                 CompressionType: "GZIP"
//             },
//             OutputSerialization: {
//                 CSV: {}
//             }
//         })
//     }

//     function get_aws_s3_content(sql_command, cb) {
//         config_aws()
//         let s3 = new AWS.S3();
//         let params = set_params(sql_command)
//         return s3.selectObjectContent(params, cb)
//     }

    // function get_loan_date() {
    //     let loanDates = [];
    //     console.log(aws_s3)
    //     for (var i = 0; i < aws_s3.length; i++) {
    //         var date = new Date(get_aws_s3_content(sql_command)[i]);
    //         loanDates.push(date.getFullYear());
    //     }
    //     console.log(loanDates)

    // }
    
// }

import axios from 'axios';
export default function AwsHTTPService() {

    var service = {
       params: params,
       get_aws_s3_content: get_aws_s3_content,
       body_data: body_data
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
    
}