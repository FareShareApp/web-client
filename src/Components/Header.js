
import React, {Component} from 'react';
import '../styles/Header.css';


class Header extends Component{

    

    render(){
        const {history} = this.props;
        return(

            <div className = "headerContainer">
                FareShare

                <h5  onClick = {() => history.push('/')}>
                    Log Out
                </h5>
                
            </div>
        )
    }

}

export default Header;