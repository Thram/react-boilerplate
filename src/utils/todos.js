import { Enum } from './tools';

const FILTER_TYPES = Enum('all', 'active', 'completed');

const { active: ACTIVE, completed: COMPLETED } = FILTER_TYPES;

const filters = {
  [COMPLETED]: todos => todos.filter(t => t.completed),
  [ACTIVE]: todos => todos.filter(t => !t.completed),
};

const serializeTodo = ({ id, text, completed = false }) => ({
  id,
  text,
  completed,
});

const getVisibleTodos = (todos = [], filter) => (filters[filter] ? filters[filter](todos) : todos);

const addTodo = (todos, todo) => [...todos, serializeTodo(todo)];

const toggleTodo = (todos, id) =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

export { FILTER_TYPES, getVisibleTodos, addTodo, toggleTodo };
export default {
  FILTER_TYPES, getVisibleTodos, addTodo, toggleTodo,
};
