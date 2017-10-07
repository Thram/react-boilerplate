import React from 'react';
import { connect } from 'react-redux';
import {
  toggleTodo as toggleTodoAction,
  addTodo as addTodoAction,
  setFilter as setFilterAction,
} from '../actions/todos';
import { getVisibleTodos } from '../utils/todos';
import Filter from '../components/Filter';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Todos = ({
  todos, filter, addTodo, toggleTodo, setFilter,
}) => (
  <div>
    <AddTodo onAdd={addTodo} />
    <TodoList todos={todos} onSelect={toggleTodo} />
    <Filter value={filter} onSelect={setFilter} />
  </div>
);

export default connect(
  state => ({
    filter: state.todos.filter,
    todos: getVisibleTodos(state.todos.list, state.todos.filter),
  }),
  dispatch => ({
    setFilter: filter => dispatch(setFilterAction(filter)),
    addTodo: task => dispatch(addTodoAction(task)),
    toggleTodo: id => dispatch(toggleTodoAction(id)),
  }),
)(Todos);
