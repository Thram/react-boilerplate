import processReducer from 'process-reducer';
import { addTodo, toggleTodo, FILTER_TYPES } from '../utils/todos';
import { types } from '../actions/todos';

const { ADD_TODO, TOGGLE_TODO, SET_FILTER } = types;
const INIT_STATE = { filter: FILTER_TYPES.all, list: [] };

const todosReducers = {
  [ADD_TODO]: (state, { payload }) => ({ ...state, list: addTodo(state.list, payload) }),
  [TOGGLE_TODO]: (state, { meta }) => ({
    ...state,
    list: toggleTodo(state.list, meta.id),
  }),
  [SET_FILTER]: (state, { payload }) => ({ ...state, filter: payload }),
};

export default processReducer(todosReducers, INIT_STATE);
