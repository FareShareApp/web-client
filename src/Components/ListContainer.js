import React, {Component} from 'react';
import UserMatch from "./UserMatch";
import MatchList from "./MatchList";
import testData from './test.json';
import '../styles/Main.css';




class ListContainer extends Component{
    state = {
        requestID: 1
    }

    handleClick(selectedID){
        this.setState({requestID: selectedID})
    }

    render(){
        return(
            
            <div className = "infoContainer"> 
                <UserMatch data = {testData} onclick = {this.handleClick.bind(this)} />
                <MatchList requestID = {this.state.requestID} />
            </div>

        )
    }
}


export default ListContainer;

