import React, {Component} from 'react';
import YearSelectionComponent from '../yearSelectionComponent/yearSelectionComponent'

export default class HomepageCompenent extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <YearSelectionComponent />
            </div>
        )
    }
}
