import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import {
  getUsers as getUsersAction,
  getPosts as getPostsAction,
  getAlbums as getAlbumsAction,
} from '../actions/mocks';
import pureCSS from '../utils/pure';
import { content } from '../containers/ContentProvider';

const CLASSES = {
  buttonGroup: pureCSS.buttonGroup,
  button: pureCSS.button(),
  buttonType: type => (type ? pureCSS.button(type) : ''),
};

const Status = styled.strong({
  display: 'inline-block',
  position: 'relative',
  left: '1rem',
  top: '.5rem',
});
const Result = styled.pre({
  whiteSpace: 'pre-wrap',
});

class Mocks extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render = () => (
    <div>
      <div>
        <div className={CLASSES.buttonGroup}>
          <button
            className={`${CLASSES.button} ${CLASSES.buttonType('primary')}`}
            onClick={this.props.getUsers}
          >
            Users
          </button>
          <button
            className={`${CLASSES.button} ${CLASSES.buttonType('secondary')}`}
            onClick={this.props.getPosts}
          >
            Posts
          </button>
          <button
            className={`${CLASSES.button} ${CLASSES.buttonType('warning')}`}
            onClick={this.props.getAlbums}
          >
            Albums
          </button>
        </div>
        {this.props.fetching && (
          <Status>{content('mocks.fetching', { entity: this.props.entity })}</Status>
        )}
      </div>
      <Result>{JSON.stringify(this.props.list)}</Result>
    </div>
  );
}

export default connect(
  state => state.mocks,
  dispatch => ({
    getUsers: () => dispatch(getUsersAction()),
    getPosts: () => dispatch(getPostsAction()),
    getAlbums: () => dispatch(getAlbumsAction()),
  }),
)(Mocks);
