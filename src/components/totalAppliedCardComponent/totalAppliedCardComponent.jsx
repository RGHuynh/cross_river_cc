import React from 'react';
import './totalAppliedCardComponent.css';

export default function TotalAppliedCardComponent({heading, amount}) {
    const currencyFormat = new Intl.NumberFormat( "en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
    
    return(
        <div className="card card--size card--style mx-auto">
            <h1 className="card-title card-title--size mt-3">{ heading }</h1>
            <hr></hr>
            <h2 className="card-price--position mb-4">{ currencyFormat.format(amount) }</h2>
        </div>
    );

}