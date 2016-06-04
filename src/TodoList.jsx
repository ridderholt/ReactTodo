import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { completeTodo } from './actions.js';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{ todos.map((t, i) => <Todo key={t.id} todo={t} onClick={() => onTodoClick(t.id)} />) }
	</ul>
);

export default connect(
	(state) => ({todos: state.todoApp}),
	(dispatch) => ({onTodoClick: (id) => dispatch(completeTodo(id)) })
)(TodoList);