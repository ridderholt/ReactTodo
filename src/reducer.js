
const todo = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
			console.log(action.name);
			return {
				name: action.name
			};
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
		default:
			return state;
	}
};

export default todos;
