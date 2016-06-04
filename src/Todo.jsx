import React from 'react';

const setStyle = (isCompleted) => {
	return {
		textDecoration: isCompleted ? 'line-through' : 'none'
	};
};

const Todo = ({todo, onClick}) => (
	<li><a onClick={onClick} style={setStyle(todo.complete)} href="#">{todo.name}</a></li>
);

export default Todo;