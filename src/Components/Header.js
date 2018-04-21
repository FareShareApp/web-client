
import React, {Component} from 'react';
import '../styles/Header.css';


class Header extends Component{

    

    render(){
        const {history, userName} = this.props;
        return(

            <div className = "headerContainer">
                
                <div className = "headerInfoContainer">
                    <div>
                        {"Welcome, " + userName + "!"}
                    </div>
                </div>

            </div>
        )
    }

}

export default Header;