import React from 'react';
import InputField from './InputField';
import '../styles/FormContainer.css';
import { Button } from 'react-bootstrap';


const FormContainer = (props) => {
    const {history} = props;
    return(
        <div className = "background-rect" >

            <div className = "inputs">
                <InputField description = {"Username"} placeholder = {""}/>
                <InputField description = {"Password"} placeholder = {""}/>
            </div>

            <div><Button className = "form-button" onClick = {() => history.push('/') } > Sign In </Button></div>
            <div><Button className = "form-button" bsStyle = "primary"> Create account </Button></div>
        </div>
    );
};


export default FormContainer