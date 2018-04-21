import React from 'react';
import InputField from './InputField';
import '../styles/FormContainer.css';
import { Button } from 'react-bootstrap';


const FormContainer = (props) => {
    const {history} = props;
    return(
        <div className = "background-rect" >
            <h1>Log In</h1>
            <div className = "inputs">
                <InputField  className= "input-login" description = {""} placeholder = {"Northwestern Email"} type={"text"}/>
                <InputField  className= "input-login" description = {""} placeholder = {"Password"} type={"password"}/>
            </div>

            <div><Button className = "form-button login" onClick = {() => history.push('/main') } > Sign In </Button></div>
            <div><Button className = "form-button login-primary" bsStyle = "primary"> Create account </Button></div>
        </div>
    );
};


export default FormContainer