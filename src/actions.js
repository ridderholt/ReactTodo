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