import React, {Component} from 'react';
import RequestList from "./RequestList";
import MatchList from "./MatchList";
import testData from './test.json';
import '../styles/Main.css';

import { getRequestsForUser, getUserMatchesForRequest } from '../Utilities/api';

class ListContainer extends Component{
    
    state = {
        requestID: 1,
        requestData: [],
        matchData: []
    }

    handleClick(index){
        this.setState({requestID: index});
                
        let selectedRequestId = this.state.requestData[index]._id;
        console.log("MATCHES FOR RIDE ID:" + selectedRequestId);
        
        getUserMatchesForRequest(selectedRequestId)
            .then(rideMatches => {
                this.setState({
                    matchData: rideMatches.data
                })
            })
    }


    componentDidMount(){

        getRequestsForUser()
            .then(result => {
                this.setState({
                    requestData: result.data
                })
            });
    }

    render(){
        return(
            <div className = "infoContainer"> 
                <RequestList requestData = { this.state.requestData } 
                             onclick = { this.handleClick.bind(this) } />
                <MatchList matchData = { this.state.matchData } />
            </div>
        )
    }
}


export default ListContainer;

