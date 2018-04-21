
import React, {Component} from 'react';
import '../styles/Header.css';


class Header extends Component{

    

    render(){
        const {history, userEmail} = this.props;
        return(

            <div className = "headerContainer">
                
                <div className = "headerInfoContainer">
                    <div>
                        {"Welcome, " + userEmail + "!"}
                    </div>
                </div>

                <div className = "headerTitle">
                    FareShare
                </div>

                <div className = "headerButtons">   
                    <h5  onClick = {() => history.push('/')}>
                        Log Out  |  Edit
                    </h5>
                </div>
            </div>
        )
    }

}

export default Header;