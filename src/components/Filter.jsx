import React from 'react';
import { map, capitalize } from 'lodash';
import styled from 'react-emotion';
import { FILTER_TYPES } from '../utils/todos';
import pureCSS from '../utils/pure';
import { content } from '../containers/ContentProvider';
import FilterButton from './FilterButton';

const CLASSES = {
  group: pureCSS.buttonGroup,
};

const colors = {
  [FILTER_TYPES.all]: 'primary',
  [FILTER_TYPES.active]: 'secondary',
  [FILTER_TYPES.completed]: 'success',
};

const Container = styled.div();
const ButtonGroup = styled.div();

const Filter = ({ value, onSelect }) => (
  <Container>
    <h4>{content('todo_list.filter')} :</h4>
    <ButtonGroup className={CLASSES.group}>
      {map(FILTER_TYPES, type => (
        <FilterButton
          key={`filter_${type}`}
          active={value === type}
          onClick={() => onSelect(type)}
          type={colors[type]}
        >
          {capitalize(type)}
        </FilterButton>
      ))}
    </ButtonGroup>
  </Container>
);

export default Filter;
