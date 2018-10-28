import React, { Component } from 'react';
import './yearSelectionComponent.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class YearSelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
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
                                <DropdownToggle className="button--color" caret>{this.props.dropdownValue}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.props.changeValue}>2007</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2008</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2009</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2010</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2011</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2012</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2013</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2014</DropdownItem>
                                    <DropdownItem onClick={this.props.changeValue}>2015</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </div>
                    <button onClick={this.props.changeCardValue} className="ml-3 btn-primary">Generate Report</button>
                </form>
            </div>
        );
    }
}
