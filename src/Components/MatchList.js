

import React, {Component} from 'react';
import '../styles/Main.css';
import Match from './Match';


import test2 from './test2.json';





class MatchList extends Component{


    
    renderMatches(data, id){ //Renders json data

       const dataset = data[id-1].map( (option, ind) => 
        
        <div> <Match destination = {option.destination} index = {ind}/> </div>)


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
            
        </div>



        )
    }

}




export default MatchList