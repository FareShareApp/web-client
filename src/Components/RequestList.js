
import React, {Component} from 'react';
import Request from './Request'
import '../styles/UserMatch.css';



class RequestList extends Component{

    renderRequests(){ //Renders json data       

        const renderedRequestList = this.props.requestData.map((currentReq, index) => 
            <div> 
                <Request onclick = {() => this.props.onclick(index)} 
                        destination = { currentReq.destination } 
                        desiredTime = { currentReq.desiredTime }
                        timeBuffer = { currentReq.timeBuffer }/> 
            </div>
        )

        return renderedRequestList;
    }

    
    render(){

        return(
            <div className = "userContainer">
                {this.renderRequests()}
            </div>
        )

    }




}

export default RequestList;