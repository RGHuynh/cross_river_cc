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
        this.get_loan_amount_total = this.get_loan_amount_total.bind(this);
        this.changeCardValue = this.changeCardValue.bind(this);
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
    }

    changeCardValue(e) {
        e.preventDefault();
        this.get_loan_amount_total('loan_amnt', 'loan_amount_total');
        this.get_loan_amount_total('funded_amnt', 'funded_amount_total');
        this.get_loan_amount_total('funded_amnt_inv', 'funded_amount_inv_total');
    }

    get_loan_amount_total(column, set_state) {

        let changeStateCallback = (array, stateName) => {
            let total = array.reduce((first_amount, second_amount) => parseFloat(first_amount) + parseFloat(second_amount))
            let updatedState = {}
            updatedState[stateName] = total
            this.setState(updatedState)
        }

        var params_data = AwsHTTPService().params(column, this.state.dropdownValue)
        AwsHTTPService().get_aws_s3_content(params_data).then(function(response) {
            if(response.data.body){
                changeStateCallback(response.data.body.filter(function(entry) { return entry.trim() != ''; }), set_state)
            }    
        })
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="year-selection-wrapper mt-5">
                    <YearSelectionComponent dropdownValue={this.state.dropdownValue} changeValue={this.changeValue} changeCardValue={this.changeCardValue}/>
                </div>
                <div className="total-section-wrapper mt-5">
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount={this.state.loan_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Amount Funded" amount={this.state.funded_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Committed by Investors" amount={this.state.funded_amount_inv_total}/>
                </div>
                <div className="line-chart--wrapper">
                    <LineChartComponent />
                    
                </div>
            </div>
        )
    }
}
