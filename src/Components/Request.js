

import React, {Component} from 'react';


let color;

class Request extends Component{
    

    render(){
        const {destination, index} = this.props
        if(index % 2 === 0){
            console.log(index)
            color = '#D1DEE9'
        }
        else{
            color = 'white'
        }

        return(

            

            <div className = "matchContainer" style={{background: color}} >
                {destination}
            </div>
        )

    }
    

}


export default Request;