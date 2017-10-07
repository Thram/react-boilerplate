import React from 'react';
import styled from 'react-emotion';
import Todo from '../components/Todo';
import pureCSS from '../utils/pure';
import { content } from '../containers/ContentProvider';

const CLASSES = {
  container: pureCSS.group,
  list: pureCSS.unit('1-2'),
  table: pureCSS.table(),
};

const Table = styled.table({ width: '100%' });

const TodoList = ({ todos, onSelect }) => (
  <div className={CLASSES.container}>
    <div className={CLASSES.list}>
      <h2>{content('todo_list.title')}</h2>
      <Table className={CLASSES.table}>
        <tbody>
          {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onSelect(todo.id)} />)}
        </tbody>
      </Table>
    </div>
  </div>
);

export default TodoList;
