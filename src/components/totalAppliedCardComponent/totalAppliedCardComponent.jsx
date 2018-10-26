import React from 'react';
import './totalAppliedCardComponent.css';

export default function TotalAppliedCardComponent({heading, amount}) {
    const currencyFormat = new Intl.NumberFormat( "en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
    
    return(
        <div>
            <h1>{ heading }</h1>
            <hr></hr>
            <h2>{ currencyFormat.format(amount) }</h2>
        </div>
    );

}