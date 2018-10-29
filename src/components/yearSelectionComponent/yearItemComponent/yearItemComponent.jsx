import React from 'react';
import { DropdownItem } from 'reactstrap';
import './yearItemComponent.css';


export default function YearItemComponent({year, value}) {
    return(
        <DropdownItem onClick={this.changeValue}>test</DropdownItem>
    );
}