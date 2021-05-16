import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './components/Login/StateProvider';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider reducer={reducer} initalState={initialState}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
