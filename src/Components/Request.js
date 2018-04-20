

import React, {Component} from 'react';
import changeInfo from './MatchList';


class Request extends Component{

    handleClick(id){
        console.log(id);
    }

    render(){

        const {onclick, requestId, destination, index} = this.props;

        return(
            <div className = "requestContainer" 
                onClick = { onclick } >
                {requestId + " "}
                {destination}
            </div>
        )

    }
    

}


export default Request;