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

						<p>3280 Wains Way</p>
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
					<h4>About the Developer</h4>
					<p>ojvzoxjvzojxvoxzvjozxvjozxvcjoxzvcjzxopv</p>
					<div className="social">
						<FaFacebook
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaTwitter
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaLinkedin
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaFacebook
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
