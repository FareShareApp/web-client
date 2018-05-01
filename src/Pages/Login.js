import React, { Component } from 'react';
import '../styles/Login.css';
import FormContainer from '../Components/FormContainer';
import Loader from '../Components/Loader';


 

class Login extends Component {

	constructor(props) 
	{
		super();
    	this.state = { isLoading: true }
	}

	componentDidMount() 
	{
    this.setState({isLoading: false})
	}

  render() {
    return (

    	this.state.isLoading 
    	? 	
    	<Loader className='loader'/> 
    	: 
      <div className = "loginContainer">
        	<h2> Sign In </h2>
        	<FormContainer {...this.props}  />
      </div>
    );
  }
}

export default Login;
