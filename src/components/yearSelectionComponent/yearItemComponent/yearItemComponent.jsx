import React from 'react';
import './yearItemComponent.css';

export default function YearItemComponent({year, value}) {
    return(
        <option value={value}>{year}</option>
    );
}