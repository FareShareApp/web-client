import React, {Component} from 'react';
import Header from "../Components/Header";
import ListContainer from "../Components/ListContainer";
import '../styles/Main.css';


class Main extends Component{
    render(){
        return(
            <div>
                <Header {...this.props}/>

                <ListContainer />

            </div>
        )

    }
}

export default Main;