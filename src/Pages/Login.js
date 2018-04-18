import React, { Component } from 'react';
import '../styles/Login.css';
import FormContainer from '../Components/FormContainer';


class Login extends Component {
  render() {
    return (
      <div className = "loginContainer">
        <h2> Sign In to FareShare! </h2>
        <FormContainer {...this.props}  />
      
      </div>
    );
  }
}

export default Login;
