import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="container">
					<div className="last">
						<span className="logo">
							<strong>EVENT MANAGER</strong>{' '}
						</span>

						<ul>
							<li>
								<i className="fab fa-facebook-square fa-lg"></i>
							</li>
							<li>
								<i className="fab fa-twitter-square fa-lg"></i>
							</li>
							<li>
								<i className="fab fa-github-square fa-lg"></i>
							</li>
							<li>
								<i className="fab fa-instagram-square fa-lg"></i>
							</li>
						</ul>
					</div>

					<hr />

					<ul>
						<li>
							<small>Our company</small>
							<ul>
								<li>
									<small> How we work</small>
								</li>
								<li>
									<small> Why Insure?</small>
								</li>
								<li>
									<small> View plans</small>
								</li>
								<li>
									<small> Reviews</small>
								</li>
							</ul>
						</li>
						<li>
							<small> Help me</small>
							<ul>
								<li>
									<small> FAQ</small>
								</li>
								<li>
									<small> Terms of use</small>
								</li>
								<li>
									<small> Privacy policy</small>
								</li>
								<li>
									<small> Cookies</small>
								</li>
							</ul>
						</li>
						<li>
							<small> Contact</small>
							<ul>
								<li>
									<small> Sales</small>
								</li>
								<li>
									<small> Support</small>
								</li>
								<li>
									<small> Live chat</small>
								</li>
							</ul>
						</li>
						<li>
							<small> Others</small>
							<ul>
								<li>
									<small> Careers</small>
								</li>
								<li>
									<small>Press</small>
								</li>
								<li>
									<small>Licenses</small>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
