import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const todoAddTrigger = (onTodoAdd, name) =>
	() => onTodoAdd(name);

const TodoAddForm = ({ isSubmitting, handleSubmit, fields: { name }, onTodoAdd }) => (
	<form onSubmit={ handleSubmit(todoAddTrigger(onTodoAdd, name.value)) }>
		<input type="text" name="name" {...name} />
		<button type="submit" disabled={isSubmitting}>Add</button>
	</form>
);

const ReduxAddTodoForm = reduxForm({
	form: 'addtodo',
	fields: ['name'],
	initialValues: { name: '' }
})(TodoAddForm);

export default connect(
	(state) => ({}),
	(dispatch) => ({onTodoAdd: (name) => dispatch({ type: 'ADD_TODO', name }) })
)(ReduxAddTodoForm);