import './AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../assets/intro-bg.jpg';

const AboutContent = () => {
	return (
		<div className="about">
			<div className="left">
				<h1>Who Am I?</h1>
				<p>A Developer</p>
				<Link to="/contact">
					<button className="btn">contact</button>
				</Link>
			</div>
			<div className="right">
				<div className="img-container">
					<div className='"img-stack top'>
						<img src={picture} className="img" alt="true" />
					</div>
					<div className='"img-stack bottom'>
						<img src={picture} className="img" alt="true" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
