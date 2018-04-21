import React, {Component} from 'react';
import LandingNav from '../Components/LandingNav'
import '../styles/Landing.css';
import Loader from '../Components/Loader';
import FormContainer from '../Components/FormContainer';
// import '../styles/Login.css';
import LoginInput from '../Components/LoginInput'
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';





class Landing extends Component{

	constructor(props) 
	{
		super();
    	this.state = { isLoading: true }
	}

	componentDidMount() 
	{
    this.setState({isLoading: false})
	}


	render(){
	return (
		this.state.isLoading 
    	? 	
    	<Loader className='loader'/> 
    	: 
		<div class="landing-page">
			<Jumbotron className="landing-jumbo">
				<h1 className="landing-title">FareShare</h1><br />
				<h2>Riding, <br /> simplified.</h2>
				<p className="landing-text">Share Uber fares to airports with Northwestern Students, fairly.</p>
			</Jumbotron>


			<div className = "loginContainer">
        		<FormContainer {...this.props}  />
      		</div>
		</div>
		);
	}
}

export default Landing
