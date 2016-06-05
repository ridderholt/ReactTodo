import fetch from 'isomorphic-fetch';

let todoIdCounter = 0;

export const addTodo = (name) => {
	return {
		name,
		id: todoIdCounter++,
		type: 'ADD_TODO',
		complete: false
	}
};

export const completeTodo = (id) => {
	return {
		id,
		type: 'TOGGLE_TODO'
	}
};

const todosFetched = (todos) => {
	return {
		todos,
		type: 'TODOS_FETCHED'
	};
};

export const fetchTodos = () => {
	return (dispatch) => {
		return fetch('/api/todos')
				.then(response => response.json())
				.then(json => dispatch(todosFetched(json)))
	};
};
