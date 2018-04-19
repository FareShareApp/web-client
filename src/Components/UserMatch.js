
import React, {Component} from 'react';
import Request from './Request'
import '../styles/UserMatch.css';









class UserMatch extends Component{

    state = {
        products: [],
    }


    componentDidMount(){
        this.getRequests(); //Fetch data from the sql server
    };



    renderRequests(data, onclick){ //Renders json data

       const dataset = data.map( (option, ind) => 
        
        <div> <Request onclick = {() => onclick(option.id)} user_id = {option.id} destination = {option.destination} index = {ind}/> </div>)


        return dataset;
    }

    getRequests = _ => { //Fetch json from server
        fetch('http://localhost:4000').then(response => response.json())
        .then(response => this.setState({products: response}))
        .catch(err => console.error(err));
    } 

    
    render(){
        const {data, onclick} = this.props;

        return(
            <div className = "userContainer">
    
                {this.renderRequests(data, onclick)}
               
            </div>
    
        )

    }




}

export default UserMatch;