

import React, {Component} from 'react';
import '../styles/Main.css';
import Request from './Request';
import test2 from './test2.json';





class MatchList extends Component{


    
    renderMatches(data, id){ //Renders json data

       const dataset = data[id-1].map( (option, ind) => 
        
        <div> <Request destination = {option.destination} index = {ind}/> </div>)


        return dataset;
    }

    changeIndex(index){
        this.setState({index: index})
    }




    render(){
        const {Request, requestID} = this.props;

        return(
         <div className = "testing">
            {this.renderMatches(test2, requestID)}

            <div onClick = {this.changeIndex.bind(this, 2)}>
                change data
            </div>
            
        </div>



        )
    }

}




export default MatchList