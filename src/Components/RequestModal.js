

import React, {Component} from 'react';
import InputField from '../Components/InputField';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import TimePicker from 'react-time-picker';


  
const options = [
    "Chicago O'Hare", "Midway Airport"
  ]


class RequestModal extends Component{

    constructor(props){
        super(props); //accessprops

        this.state = {
            destination: "",
            time: '10:00',
            time_buffer: "",

            date: null,
            focused: false,
        }

        this._onSelect = this._onSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
    }

    _onSelect(selected){ //Dropdown box changes 
        this.setState({destination: selected})
    }

    handleClick(){ //Handles request submition 
        if(this.state.date === null){
            return;
        }

        console.log(this.state.destination.value, this.state.time, this.state.time_buffer, this.state.date.toDate())
        
    }

    handleChange(event){
        this.setState({
            [event.target.name]: [event.target.value]
        })

    }

    dateChange(value){
        this.setState({time: value})
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

                    <div style = {{marginTop: "2%"}}>
                    <InputField Name = {"time_buffer"} 
                                onchange = {this.handleChange}
                                Value = {this.state.time_buffer}
                                description = {"How long can you wait? (Minutes)"} 
                                placeholder = {"ex) 30"} 
                                type={"text"}/>
                    </div>

                    
                    <div className = "timeRequest">
                        <SingleDatePicker
                            date={this.state.date} // momentPropTypes.momentObj or null
                            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        />
                        <TimePicker
                            onChange={this.dateChange}
                           value={this.state.time}
                        />
                    </div>

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