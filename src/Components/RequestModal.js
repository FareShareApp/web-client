

import React, {Component} from 'react';
import InputField from '../Components/InputField';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap';


  
const options = [
    "Chicago O'Hare", "Midway Airport"
  ]


class RequestModal extends Component{
    
    render(){
        const {onclick} = this.props;
        return(
            
            <div>
                <div className = "modalLeave" onClick = {() => onclick()}>
                    x 
                </div>
                <div className = "modalTitle">
                    Request A Share!
                </div>

                <div>
                    <Dropdown options={options} onChange={this._onSelect} value={0} placeholder="Select Your Destination" />
                    <InputField description = {"Time"} placeholder = {"ex) 4/10/2018"} type={"text"}/>
                    <InputField description = {"Riders"} placeholder = {"ex) 1-4"} type={"text"}/>
                    <div><Button className = "form-button" bsStyle = "primary"> Request </Button></div>
                </div>
            </div>
        )
    }
}

export default RequestModal;