import React, {Component} from 'react';
import InputField from './InputField';
import '../styles/FormContainer.css';
import { Button } from 'react-bootstrap';


class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state.Username)

    }


    render(){
        const {history} =  this.props;
        return(
            <div className = "background-rect" >

                <div className = "inputs">
                    <InputField 
                        Name = {"Username"}
                        Value={this.state.Username}
                        onchange={this.handleInputChange}
                        description = {"Username"}
                        placeholder = {"ex) user@gmail.com"} 
                        type={"text"}
                    />
                    <InputField description = {"Password"} placeholder = {""} type={"password"}/>
                </div>

                <div>
                    <Button 
                        className = "form-button" 
                        onClick = {() => history.push({pathname: '/main',
                                                       state: {Username: this.state.Username}} )} >
                         Sign In 
                    </Button>
                </div>
                
                <div><Button className = "form-button" bsStyle = "primary"> Create account </Button></div>
            </div>
        );
    }
};


export default FormContainer