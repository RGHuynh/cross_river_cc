import React, { Component } from 'react';
import './yearSelectionComponent.css';
import YearItemComponent from './yearItemComponent/yearItemComponent';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class YearSelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.toggle.bind(this);
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
            dropdownOpen: !this.state.dropdownOpen,
            dropdownValue: e.currentTarget.textContent

        })
    }

    render(){
        return(
            <div>
                <label htmlFor="year-dropdown">Select Year</label>
                <select id="year-dropdown" form="year-selection-form">
                    <YearItemComponent value="test" year="2012" />
                    <YearItemComponent value="test" year="2103" />
                </select>

                <form action="/" id="year-selection-form" className="year-selection-wrapper">
                    <input type="submit" value="Generate Report"></input>
                </form>
            </div>
        );
    }
}
