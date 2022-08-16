import './PricingCardStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = () => {
	return (
		<div className="pricing">
			<div className="card-container">
				<div className="card">
					<h3>- Basic -</h3>
					<span className="bar"></span>
					<p className="btc">$100</p>
					<p>- 3 Days -</p>
					<p>- 3 Ways -</p>
					<p>- 3 Pays -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>

				<div className="card">
					<h3>- Premium -</h3>
					<span className="bar"></span>
					<p className="btc">$200</p>
					<p>- 5 Days -</p>
					<p>- 5 Ways -</p>
					<p>- 5 Pays -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>

				<div className="card">
					<h3>- Premier -</h3>
					<span className="bar"></span>
					<p className="btc">$300</p>
					<p>- 7 Days -</p>
					<p>- 7 Ways -</p>
					<p>- 7 Pays -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
