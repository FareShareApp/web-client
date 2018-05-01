import React, {Component} from 'react';
import LandingNav from '../Components/LandingNav'
import '../styles/Landing.css';
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import Login from "./Login";
import LoginMobile from './LoginMobile'
import MediaQuery from "react-responsive";





class Landing extends Component{
	render(){
	return (
		<div className="landing">


			<div className = "LandingMain" >
				<div className = "mobile-login-landing">
					<MediaQuery query = "(max-device-width: 1224px)" >
						<LoginMobile {...this.props} />
					</MediaQuery>

				</div>
				<Jumbotron className="landing-jumbo">
					<h1>Riding, <br /> simplified.</h1>
					<p className="landing-text">Share Uber fares to airports with Northwestern Students, fairly.</p>
				</Jumbotron>
			</div>

			<MediaQuery query="(min-device-width: 1224px)">
				<Login {...this.props} />
			</MediaQuery>

		</div>
		);
	}
}

export default Landing
