import React, { Component } from 'react';
import './yearSelectionComponent.css';
import YearItemComponent from './yearItemComponent/yearItemComponent';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class YearSelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
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
                                    <DropdownItem onClick={this.changeValue}>test</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </div>
                    <button className="ml-3 btn-primary">Generate Report</button>
                </form>
            </div>
        );
    }
}
