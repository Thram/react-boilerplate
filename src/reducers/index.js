import { combineReducers } from 'redux';
import app from './app';
import todos from './todos';
import mocks from './mocks';

export default combineReducers({ app, todos, mocks });
