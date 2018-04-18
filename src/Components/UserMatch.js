
import React, {Component} from 'react';
import Match from './Match'
import '../styles/UserMatch.css';
import testData from './test.json';








class UserMatch extends Component{

    state = {
        products: [],
    }


    componentDidMount(){
        this.getProduct(); //Fetch data from the sql server
    };



    renderProduct(data){ //Renders json data

       const dataset = data.map( (option, ind) => 
        
        <div> <Match destination = {option.destination} index = {ind}/> </div>)


        return dataset;
    }

    getProduct = _ => { //Fetch json from server
        fetch('http://localhost:4000').then(response => response.json())
        .then(response => this.setState({products: response}))
        .catch(err => console.error(err));
    } 

    
    render(){
        return(
            <div className = "userContainer">
    
                {this.renderProduct(testData)}
               
            </div>
    
        )

    }




}

export default UserMatch;