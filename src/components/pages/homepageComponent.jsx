import React, {Component} from 'react';
import './homepageComponent.css';
import YearSelectionComponent from '../yearSelectionComponent/yearSelectionComponent';
import TotalAppliedCardComponent from '../totalAppliedCardComponent/totalAppliedCardComponent';
import LineChartComponent from '../lineChartComponent/lineChartComponent';

export default class HomepageCompenent extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <div className="year-selection-wrapper mt-5">
                    <YearSelectionComponent />
                </div>
                <div className="total-section-wrapper mt-5">
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                    <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                </div>
               
                <LineChartComponent />
            </div>
        )
    }
}
