import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { fetchTodos } from './actions.js';

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	);
};

render();
store.dispatch(fetchTodos());
