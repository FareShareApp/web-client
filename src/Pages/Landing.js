import React, {Component} from 'react';
import LandingNav from '../Components/LandingNav'
import '../styles/Landing.css';



const Landing = () => {
	return (
		<div className="landing">
			<LandingNav />

			<h5 className="landing-text">Share Uber fares to airpots with Northwestern Students, fairly.</h5>
		</div>
		);
}

export default Landing
