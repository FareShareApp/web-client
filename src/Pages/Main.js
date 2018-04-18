import React, {Component} from 'react';
import Header from "../Components/Header";
import UserMatch from "../Components/UserMatch";


class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <UserMatch/>
            </div>
        )

    }
}

export default Main;