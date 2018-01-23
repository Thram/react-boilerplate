import uuid from 'uuid/v1';
import { actionType } from '../utils/tools';

const todosType = actionType('todos');

const ADD_TODO = todosType('ADD');
const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    text,
  },
});

const SET_FILTER = todosType('SET');
const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});

const TOGGLE_TODO = todosType('TOGGLE');
const toggleTodo = id => ({
  type: TOGGLE_TODO,
  meta: { id },
});

const types = { ADD_TODO, SET_FILTER, TOGGLE_TODO };

export { types, addTodo, setFilter, toggleTodo };

export default {
  types,
  addTodo,
  setFilter,
  toggleTodo,
};
