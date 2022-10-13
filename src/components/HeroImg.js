import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import './HeroImgStyles.css';

const HeroImg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<img className="intro-img" src={IntroImg} alt="IntroImg" />
			</div>
			<div className="content">
				<p>FULL-STACK WEB DEVELOPER</p>
				<h1>TREVOR TRESS</h1>

				<div className="hero-btns">
					<Link to="/project" className="btn">
						PROJECTS
					</Link>
					<Link to="/contact" className="btn btn-light">
						CONTACT
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
