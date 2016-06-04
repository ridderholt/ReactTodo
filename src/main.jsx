import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const render = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('app')
	);
};

render();
