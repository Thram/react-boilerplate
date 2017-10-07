import reducers from '../src/reducers';
import { addTodo, toggleTodo } from '../src/actions/todos';

describe('--- Todos Tests ---', () => {
  test('Add Todo', () => {
    const state = reducers({}, addTodo('test'));
    expect(state.todos.list.length).toBe(1);
  });
  test('Toggle Todo', () => {
    const stateBefore = reducers({}, addTodo('test'));
    const state = reducers(stateBefore, toggleTodo(stateBefore.todos.list[0].id));
    expect(state.todos.list[0].completed).toBeTruthy();
  });
});
