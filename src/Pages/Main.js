import React, {Component} from 'react';
import Header from "../Components/Header";
import UserMatch from "../Components/UserMatch";
import '../styles/Main.css';
import MatchList from "../Components/MatchList";

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>

                <div className = "infoContainer"> 
                    <UserMatch/>
                    <MatchList/>
                </div>
            </div>
        )

    }
}

export default Main;