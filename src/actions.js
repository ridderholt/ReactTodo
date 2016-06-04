let todoIdCounter = 0;

export const addTodo = (name) => {
	return {
		name,
		id: todoIdCounter++,
		type: 'ADD_TODO'
	}
};