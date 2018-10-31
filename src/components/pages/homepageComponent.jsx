import React, {Component} from 'react';
import './homepageComponent.css';
import YearSelectionComponent from '../yearSelectionComponent/yearSelectionComponent';
import TotalAppliedCardComponent from '../totalAppliedCardComponent/totalAppliedCardComponent';
import LineChartComponent from '../lineChartComponent/lineChartComponent';
import AwsHTTPService from '../../services/awsHTTPService/awsHTTPService';
import BarChartComponent from '../barChartComponent/barChartComponent';

export default class HomepageCompenent extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.get_loan_amount_total = this.get_loan_amount_total.bind(this);
        this.changeCardValue = this.changeCardValue.bind(this);
        this.getLoanAvg = this.getLoanAvg.bind(this);
        this.getLoanVolume = this.getLoanVolume.bind(this);
        this.state = {
            dropdownValue: '2007',
            loan_amount_total: 0,
            funded_amount_total: 0,
            funded_amount_inv_total: 0,
            loanDatas: [],
            monthDatas: []
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
        this.getLoanAvg()
        this.getLoanVolume()
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

    getLoanAvg() {
        let grades = ["A", "B", "C", "D", "E", "F", "G"]
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let gradeDatas = {"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": []}
        grades.forEach((grade)=> {
            months.forEach((month) => {
                let paramsData = AwsHTTPService().loanAvgParams(this.state.dropdownValue, grade, month)
                AwsHTTPService().getAwsLoanAvg(paramsData).then((response) => {
                    if(response.data.body) {
                        gradeDatas[grade].push(parseInt(response.data.body.filter(function(entry) { return entry.trim() != ''; })))
                        this.setState({
                            loanDatas: gradeDatas
                        })
                    }
                }) 
            })
        })
    }
    

    getLoanVolume(){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let month_Datas = {"Jan": 0, "Feb": 0, "Mar": 0, "Apr": 0, "May": 0, "Jun": 0, "Jul": 0, "Aug": 0, "Sept": 0, "Oct": 0, "Nov": 0, "Dec": 0}
        months.forEach((month) => {
            let paramsData = AwsHTTPService().loanVolume(this.state.dropdownValue, month)
            AwsHTTPService().getAwsLoanAvg(paramsData).then((response) => {
                if(response.data.body) {
                    month_Datas[month] += parseInt(response.data.body.filter(function(entry) { return entry.trim() != ''; }))
                    this.setState({
                        monthDatas: month_Datas
                    })
            
                }
            }) 
        })
    }

    render(){
        return(
            <div className="content-wrapper content-wrapper--color">
                <div className="year-selection-wrapper mt-5">
                    <YearSelectionComponent dropdownValue={this.state.dropdownValue} changeValue={this.changeValue} changeCardValue={this.changeCardValue}/>
                </div>
                <div className="total-section-wrapper mt-5">
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount={this.state.loan_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Amount Funded" amount={this.state.funded_amount_total}/>
                    <TotalAppliedCardComponent heading="Total Committed by Investors" amount={this.state.funded_amount_inv_total}/>
                </div>
                <div className="line-chart--wrapper mt-4">
                    <LineChartComponent loanDatas={this.state.loanDatas}/>
                    <BarChartComponent  monthDatas={this.state.monthDatas}/>
                    
                </div>
            </div>
        )
    }
}
