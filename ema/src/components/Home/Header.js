import React from 'react';

function Header() {
	return (
		<div>
			<nav>
				<div className="container">
					<span className="logo">
						<strong>EVENT MANAGER</strong>{' '}
					</span>
					<ul>
						<li className="nav">
							<a href="http://mydy.dypatil.edu/">Contact us</a>
						</li>
						<li className="nav">
							<a href="#">About</a>
						</li>
						<li className="nav">
							<a href="https://github.com/HekarKET/EVM">Source code</a>
						</li>
						<li className="nav">
							<a href="http://localhost:4000/aac112cb-441c-44a0-97f1-e2b067a4f355">
								Stream
							</a>
						</li>
					</ul>
					<i className="fa fa-bars" aria-hidden="true" id="nav-bars"></i>
				</div>
			</nav>
			<header>
				<div className="container">
					<div className="content">
						<h1> Event Management Platform </h1>
						<p>
							Event Management platform helps event planners better build,
							measure and grow their events with a people-first approach. Plus,
							we have a comprehensive blog (covered below).
						</p>
						<span>
							<button>
								<a href="http://localhost:4000/">Stream</a>{' '}
							</button>
						</span>
					</div>
					<img
						className="desktop"
						src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
						alt="Event"
					/>
					<img
						className="mobile"
						src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
						alt="Event"
					/>
				</div>
			</header>
		</div>
	);
}

export default Header;
