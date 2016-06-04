import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';

const TodoList = ({ todos }) => (
	<ul>
		{ todos.map((t, i) => <Todo todo={t} />) }
	</ul>
);

export default connect(
	(state) => ({todos: state.todos})
)(TodoList);