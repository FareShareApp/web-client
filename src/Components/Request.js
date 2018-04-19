

import React, {Component} from 'react';
import changeInfo from './MatchList';


let color;

class Request extends Component{

    handleClick(id){
        console.log(id)
    }

    render(){
        const {onclick, user_id, destination, index} = this.props
        if(index % 2 === 0){
            console.log(index)
            color = '#D1DEE9'
        }
        else{
            color = 'white'
        }


        return(

            

            <div className = "matchContainer" style={{background: color}} 
            onClick = {onclick} >
                {user_id + " "}
                {destination}
            </div>
        )

    }
    

}


export default Request;