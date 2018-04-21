import React, {Component} from 'react';
import '../styles/LandingNav.css';
import { Navbar, Nav, NavItem, PageHeader } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router'




class LandingNav extends Component {

	render() {
		const {history} = this.props;
		return (
				<Navbar className="navbar-top">
							<h2><span className="navbar-text">FareShare</span></h2>
				</Navbar>
			)
	}
}


export default LandingNav