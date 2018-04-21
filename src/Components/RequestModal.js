

import React, {Component} from 'react';
import InputField from '../Components/InputField';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap';


  
const options = [
    "Chicago O'Hare", "Midway Airport"
  ]


class RequestModal extends Component{

    constructor(props){
        super(props); //accessprops

        this.state = {
            destination: "",
            time: "",
            time_buffer: "",
            
        }

        this._onSelect = this._onSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _onSelect(selected){ //Dropdown box changes 
        this.setState({destination: selected})
    }

    handleClick(){ //Handles request submition 
        console.log(this.state.destination.value, this.state.time, this.state.time_buffer)
        
    }

    handleChange(event){
        this.setState({
            [event.target.name]: [event.target.value]
        })

    }
    
    render(){
        const {onclick, selected} = this.props;

        return(
            
            <div>
                <div className = "modalLeave" onClick = {() => onclick()}>
                    x 
                </div>
                <div className = "modalTitle">
                    Request A Share!
                </div>

                <div>
                    <Dropdown options={options}
                              onChange={this._onSelect}
                              value={this.state.destination}
                              placeholder="Select Your Destination" />

                    <InputField Name = {"time_buffer"} 
                                onchange = {this.handleChange}
                                Value = {this.state.time_buffer}
                                description = {"How long can you wait? (Minutes)"} 
                                placeholder = {"ex) 30"} 
                                type={"text"}/>

                    <InputField Name = {"time"}
                                onchange = {this.handleChange}
                                Value = {this.state.time}
                                description = {"Time"}
                                placeholder = {"ex) 1-4"}
                                type={"text"}/>

                    <div><Button className = "form-button" 
                                    bsStyle = "primary"
                                    onClick = {this.handleClick}
                                    >
                                     Request 
                        </Button></div>
                </div>
            </div>
        )
    }
}

export default RequestModal;