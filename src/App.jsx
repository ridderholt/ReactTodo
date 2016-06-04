import React from 'react';
import TodoAdder from './TodoAdder.jsx';
import TodoList from './TodoList.jsx';

const App = () => (
		<div>
			<h1>Remember</h1>
			<TodoAdder />
			<TodoList />
		</div>
	);

export default App;