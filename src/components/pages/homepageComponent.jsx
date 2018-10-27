import React, {Component} from 'react';
import YearSelectionComponent from '../yearSelectionComponent/yearSelectionComponent';
import TotalAppliedCardComponent from '../totalAppliedCardComponent/totalAppliedCardComponent';
import LineChartComponent from '../lineChartComponent/lineChartComponent';

export default class HomepageCompenent extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <YearSelectionComponent />
                <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                <TotalAppliedCardComponent heading="Total Amount Applied For" amount="1232131"/>
                <LineChartComponent />
                
            </div>
        )
    }
}
