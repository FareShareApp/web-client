

import React, {Component} from 'react';
import '../styles/Main.css';
import Match from './Match';


class MatchList extends Component{

    renderMatches(){ //Renders json data

        let renderedMatches = this.props.matchData.map((currentMatch, index) => 
            <div> 
                <Match 
                       first = { currentMatch.firstName }
                       last = { currentMatch.lastName }
                       email = { currentMatch.email }
                       pic = { currentMatch.profileUrl }/> 
            </div>
        )


        return renderedMatches;
    }

    changeIndex(index){
        this.setState({index: index})
    }




    render(){

        return(
         <div className = "testing" >
            {this.renderMatches()}
        </div>



        )
    }

}




export default MatchList