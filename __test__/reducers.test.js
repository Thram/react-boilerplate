import { combineReducers } from 'redux';
import reducers from '../src/reducers';
import { addTodo, toggleTodo } from '../src/actions/todos';

const combinedReducers = combineReducers(reducers);

describe('--- Todos Tests ---', () => {
  test('Add Todo', () => {
    const state = combinedReducers({}, addTodo('test'));
    expect(state.todos.list.length).toBe(1);
  });
  test('Toggle Todo', () => {
    const stateBefore = combinedReducers({}, addTodo('test'));
    const state = combinedReducers(stateBefore, toggleTodo(stateBefore.todos.list[0].id));
    expect(state.todos.list[0].completed).toBeTruthy();
  });
});
