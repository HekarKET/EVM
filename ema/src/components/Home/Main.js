import React from 'react';
import Features from './Features';

const Main = (props) => {
	return (
		<div>
			<main>
				<div className="container">
					<h1>We’re different</h1>
					<div className="list-features">
						<ul>
							{props.map((con) => (
								<Features
									key={con.id}
									title={con.title}
									logo={con.img}
									content={con.content}
								/>
							))}
						</ul>
					</div>

					<div className="banner">
						<h1> Find out more about how we work</h1>
						<button>About</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Main;
