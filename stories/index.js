import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs, object, text, array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

import AddTodo from '../src/components/AddTodo';
import Filter from '../src/components/Filter';
import TodoList from '../src/components/TodoList';

import FlatButton from './FlatButtonStory';
import Icon from './IconStory';

setOptions({
  name: "Thram's Boilerplate for React",
  url: 'https://github.com/Thram/react-boilerplate',
  showLeftPanel: true,
  downPanelInRight: true,
});

setAddon(infoAddon);

storiesOf('Addons', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    '• Info',
    "This is the basic usage of the `info addon`. Don't forget to define your `propTypes` .",
    () => <button onClick={action('Button Clicked')}>Click Me!</button>,
  )
  .add('• Knobs', () => (
    <div
      style={object('style', {
        margin: '1rem',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '1rem',
        background: '#5CACC4',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
      })}
    >
      Edit my Styles!!
    </div>
  ));
storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('• Icon', () => <Icon />)
  .add('• Flat Button', () => <FlatButton />)
  .add('• Todo List', () => (
    <TodoList
      todos={array('Todos', [
        { id: 1, text: 'Learn ES6+', completed: true },
        { id: 2, text: 'Learn React+Redux', completed: false },
        { id: 3, text: 'Learn Webpack', completed: false },
      ])}
      onSelect={action('Toogle Todo!')}
    />
  ))
  .add('• Add Todo', () => <AddTodo onAdd={action('Add todo!')} />)
  .add('• Filter', () => (
    <Filter value={text('filter', 'all')} onSelect={action('Select Filter')} />
  ));
