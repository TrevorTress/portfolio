import './FooterStyles.css';
import React from 'react';
import {
	FaHome,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';

import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome
							size={20}
							style={{ color: '#fff', marginRight: '2rem' }}
						/>
						<p>Oakland, MI</p>
					</div>

					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>{' '}
							248-770-5052
						</h4>
					</div>

					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>{' '}
							trevor.tress@outlook.com
						</h4>
					</div>
				</div>

				<div className="right">
					<h4>About</h4>
					<p>
						I am a full-stack web developer specializing in
						MERN-stack applications.
					</p>
					<div className="social">
						<a href="https://www.linkedin.com/in/trevortress/">
							<FaLinkedin
								size={30}
								style={{ color: '#fff', marginRight: '1rem' }}
							/>
						</a>

						<a href="https://github.com/TrevorTress">
							<AiFillGithub
								size={30}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
