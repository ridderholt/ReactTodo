const defaultTodos = {
	todos: []
};

const todos = (todos = defaultTodos, action) => {
	switch(action.type){
		default:
			return defaultTodos;
	}
};

export default todos;
