

import React, {Component} from 'react';
import changeInfo from './MatchList';

//External libraries
import format from 'date-format';
import '../styles/Request.css'

class Request extends Component{

    timeConverse(time){
        let hour = time.getHours();
        let minute = time.getMinutes();

        let minute_s = minute;
        let hour_s = hour;
        let poa = "PM";

        if(minute < 10){
            minute_s = "0" + minute_s
        }

        if(hour < 13){
            poa = "AM";
        }
        else{
            hour -= 12
        }

        hour_s = hour;

        if(hour < 10 && hour !== 0){
            hour_s = "0" + hour_s
        }
        else if(hour === 0){
            hour_s = "12"
        }

        let final = hour_s + ":" + minute_s + poa;
        return final 
    }

    render(){

        const {onclick, destination, desiredTime, timeBuffer, theme} = this.props;
        
        let numericBuffer = Number(timeBuffer) * 60 * 1000;
        let formattedDate = new Date(desiredTime);

        let lowerDateBound = new Date(formattedDate.getTime() - numericBuffer);
        let upperDateBound = new Date(formattedDate.getTime() + numericBuffer);


        return(
                <div className = {this.props.theme}     
                    onClick = { onclick }>
                    
                    <div className="requestInformation">
                        <div className = "destinationTitle">{ destination }</div>
                        <div>{ formattedDate.toLocaleDateString() }</div>
                        
                        <div>
                            { this.timeConverse(lowerDateBound) + " - " } 
                            {  this.timeConverse(upperDateBound) } </div>               
                    </div>


                </div>
        )

    }
    

}


export default Request;