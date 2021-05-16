import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../Login/StateProvider';
import { auth, provider } from '../../firebase';

function Login() {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	// const signIn = () => {
	// 	auth
	// 		.signInWithPopup(provider)
	// 		.then((result) => {
	// 			const credential = result.credential;
	// 			const token = credential.token;
	// 			const user = result.user;
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.message);
	// 		});
	// };
	return (
		<div className="login">
			<div className="login_container">
				<div className="login_text">
					<h1>Sign in to Event Manager</h1>
				</div>
				<Button type="submit" onClick={signIn}>
					Sign in With Google
				</Button>
			</div>
		</div>
	);
}

export default Login;
