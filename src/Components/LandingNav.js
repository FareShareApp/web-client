import React, {Component} from 'react';
import '../styles/LandingNav.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router'




class LandingNav extends Component {

	render() {
		return (
				<Navbar className="navbar">
					<Navbar.Header>
							<h2><a className="navbar-text header">FareShare</a></h2>
					</Navbar.Header>

					<Nav pullRight >
						<NavItem>
							<h4 className="navbar-text">Log In</h4>
						</NavItem>
						<NavItem>
							<h4 className="navbar-text">Sign Up</h4>
						</NavItem>
					</Nav>
				</Navbar>
			)
	}
}


export default LandingNav