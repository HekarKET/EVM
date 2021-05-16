import React from 'react';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Nav';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { useStateValue } from './components/Login/StateProvider';

const App = () => {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div>
			{!user ? (
				<Login />
			) : (
				<Router>
					<Navbar />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} exact />
					</Switch>
				</Router>
			)}
		</div>
	);
};

export default App;
