
const todo = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return {
				name: action.name,
				id: action.id
			};
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state;
			}

			return Object.assign({}, state, {
				complete: !state.complete
			});
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))
		case 'TODOS_FETCHED':
			return [
				...state,
				...action.todos
			]
		default:
			return state;
	}
};

export default todos;
