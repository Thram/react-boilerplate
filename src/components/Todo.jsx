import React from 'react';
import styled from 'react-emotion';
import Icon from './Icon';
import FlatButton from './FlatButton';

const getIcon = completed => (completed ? 'check_box' : 'check_box_outline_blank');

const Row = styled.tr(({ odd }) => ({ backgroundColor: odd ? '#DDD' : '#FFF' }));
const Task = styled.span({ marginLeft: '1rem' });

const Todo = ({ onClick, completed, text }) => (
  <Row odd={completed}>
    <td>
      <FlatButton onClick={onClick}>
        <Icon>{getIcon(completed)}</Icon>
        <Task>{text}</Task>
      </FlatButton>
    </td>
  </Row>
);

export default Todo;
