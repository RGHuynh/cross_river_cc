import React, { Component } from 'react';
import './yearSelectionComponent.css';
import YearItemComponent from './yearItemComponent/yearItemComponent';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AwsHTTPService from '../../services/awsHTTPService/awsHTTPService';

export default class YearSelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.get_aws_s3_content = this.get_aws_s3_content.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdownValue: '2012'
        };
    }
    
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    changeValue(e) {
        this.setState({
            dropdownOpen: !e.dropdownOpen,
            dropdownValue: e.target.innerText

        })
    }

    get_aws_s3_content(){
        let loan_dates = [];
        let sqlCommand = "SELECT issue_d FROM s3object WHERE issue_d LIKE(" + "'%" + this.state.dropdownValue + "%'" + ")"
        AwsHTTPService().get_aws_s3_content(sqlCommand, ( err, data) =>{
            const eventStream = data.Payload;
            let aws_items = eventStream[0].Records.Payload
            
            let aws_formated_items = aws_items.toString().replace(/\n/g, ' ').split(" ")
            
        })

    }
    render(){
        return(
            <div className="form-wrapper w-100">
                <form className="form-inline mx-auto">
                    <div className="form-inline form--size">
                        <div className="form-group mx-auto mt-2 mb-2">
                            <label className="label--position" htmlFor="year-form" >Select Year</label>
                        </div>
                        <div className="vertical-rule mx-auto mt-2 mb-2"></div>
                        <div className="form-group mx-auto mt-2 mb-2">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="button--color" caret>{this.state.dropdownValue}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.changeValue}>2007</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2008</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2009</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2010</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2011</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2012</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2013</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2014</DropdownItem>
                                    <DropdownItem onClick={this.changeValue}>2015</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </div>
                    <button className="ml-3 btn-primary">Generate Report</button>
                    <p>{this.get_aws_s3_content()}</p>
                </form>
            </div>
        );
    }
}
