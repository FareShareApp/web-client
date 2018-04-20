import React from 'react';
import InputField from './InputField';
import '../styles/FormContainer.css';
import { Button } from 'react-bootstrap';


const FormContainer = (props) => {
    const {history} = props;
    return(
        <div className = "background-rect" >

            <div className = "inputs">
                <InputField description = {"Username"} placeholder = {""} type={"text"}/>
                <InputField description = {"Password"} placeholder = {""} type={"password"}/>
            </div>

            <div><Button className = "form-button" onClick = {() => history.push('/main') } > Sign In </Button></div>
            <div><Button className = "form-button" bsStyle = "primary"> Create account </Button></div>
        </div>
    );
};


export default FormContainer