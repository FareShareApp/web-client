

import React, {Component} from 'react';
import changeInfo from './MatchList';

//External libraries
import format from 'date-format';

class Request extends Component{

    handleClick(id){
        console.log(id);
    }

    render(){

        const {onclick, destination, desiredTime, timeBuffer} = this.props;
        
        let numericBuffer = Number(timeBuffer) * 60 * 1000;
        let formattedDate = new Date(desiredTime);

        let lowerDateBound = new Date(formattedDate.getTime() - numericBuffer);
        let upperDateBound = new Date(formattedDate.getTime() + numericBuffer);

        console.log(lowerDateBound);
        console.log(upperDateBound);

        return(
            <div className = "requestContainer" 
                onClick = { onclick }>
                
                <div className="requestInformation">
                    <div>{ destination }</div>
                    <div>{ formattedDate.toLocaleDateString() }</div>
                </div>

                { lowerDateBound.getHours() + ":" + lowerDateBound.getMinutes() } - 
                { upperDateBound.getHours() + ":" + upperDateBound.getMinutes() }

            </div>
        )

    }
    

}


export default Request;