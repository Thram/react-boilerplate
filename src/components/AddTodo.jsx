import React, { Component } from 'react';
import styled from 'react-emotion';
import pureCSS from '../utils/pure';

const CLASSES = {
  form: pureCSS.form(),
  input: pureCSS.input(),
  button: `${pureCSS.button()} ${pureCSS.button('primary')}`,
};

const Container = styled.div({ display: 'flex', alignItems: 'center' });
const Input = styled.input({ marginRight: '1rem' });

class AddTodo extends Component {
  state = { task: '' };

  onSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.task) {
      const { onAdd } = this.props;
      onAdd(this.state.task);
      this.setState({ task: '' });
    }
  };

  render = () => (
    <form onSubmit={this.onSubmit} className={CLASSES.form}>
      <Container>
        <Input
          className={CLASSES.input}
          value={this.state.task}
          onChange={ev => this.setState({ task: ev.target.value.trim() })}
        />
        <button type="submit" className={CLASSES.button}>
          Add Todo
        </button>
      </Container>
    </form>
  );
}

export default AddTodo;
