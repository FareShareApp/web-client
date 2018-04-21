
import React, {Component} from 'react';
import '../styles/Header.css';


class Header extends Component{

    

    render(){
        const {history, userEmail} = this.props;
        return(

            <div className = "headerContainer">
                
                <div className = "headerInfoContainer">
                    {"✉ " + userEmail}
                </div>

                <div> 
                    FareShare
                    <h5  onClick = {() => history.push('/')}>
                        Log Out
                    </h5>
                </div>
            </div>
        )
    }

}

export default Header;