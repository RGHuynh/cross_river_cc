import React, {Component} from 'react';
import './homepageComponent.css';
import YearSelectionComponent from '../yearSelectionComponent/yearSelectionComponent';
import TotalAppliedCardComponent from '../totalAppliedCardComponent/totalAppliedCardComponent';
import LineChartComponent from '../lineChartComponent/lineChartComponent';
import AwsHTTPService from '../../services/awsHTTPService/awsHTTPService';

export default class HomepageCompenent extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.get_loan_amount_total = this.get_loan_amount_total.bind(this)
        this.get_aws_s3_content = this.get_aws_s3_content.bind(this);
        this.get_funded_amount_total = this.get_funded_amount_total.bind(this);
        this.get_funded_amount_inv_total = this.get_funded_amount_inv_total.bind(this);
        this.state = {
            dropdownValue: '2007',
            loan_amount_total: 0,
            funded_amount_total: 0,
            funded_amount_inv_total: 0
        }
    }

    changeValue(e) {
        this.setState({
            dropdownValue: e.target.innerText
        })
        this.get_loan_amount_total()
        this.get_funded_amount_total()
        this.get_funded_amount_inv_total()
    }

    get_aws_s3_content(column, changeStateCallback){
        let sqlCommand = "SELECT " + column + " FROM s3object WHERE issue_d LIKE(" + "'%" + this.state.dropdownValue + "%'" + ")"
        AwsHTTPService().get_aws_s3_content(sqlCommand, (err, data) =>{
            const eventStream = data.Payload;
            let aws_items = eventStream[0].Records.Payload
            
            let aws_formated_items = aws_items.toString().replace(/\n/g, ' ').split(" ")
            aws_formated_items = aws_formated_items.filter(function(entry) { return entry.trim() != ''; });

            if(changeStateCallback) changeStateCallback(aws_formated_items) 
        })
    }

    get_loan_amount_total() {
        let changeStateCallback = (array) => {
            let total = array.reduce((first_amount, second_amount) => parseInt(first_amount) + parseInt(second_amount))
            this.setState({
                loan_amount_total: total
            })
        }
        this.get_aws_s3_content('loan_amnt', changeStateCallback);
    }

    get_funded_amount_total() {
        let changeStateCallback = (array) => {
            let total = array.reduce((first_amount, second_amount) => parseInt(first_amount) + parseInt(second_amount))
            this.setState({
                funded_amount_total: total
            })
        }
        this.get_aws_s3_content('funded_amnt', changeStateCallback);
    }

    get_funded_amount_inv_total() {
        let changeStateCallback = (array) => {
            let total = array.reduce((first_amount, second_amount) => parseInt(first_amount) + parseInt(second_amount))
            this.setState({
                funded_amount_inv_total: total
            })
        }
        this.get_aws_s3_content('funded_amnt_inv', changeStateCallback);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="year-selection-wrapper mt-5">
                    <YearSelectionComponent dropdownValue={this.state.dropdownValue} changeValue={this.changeValue}/>
                </div>
                <div className="total-section-wrapper mt-5">
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount={this.state.loan_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Amount Funded" amount={this.state.funded_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Committed by Investors" amount={this.state.funded_amount_inv_total}/>
                </div>
                <LineChartComponent />
            </div>
        )
    }
}
