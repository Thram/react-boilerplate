import processReducer from 'process-reducer';
import { types } from '../actions/mocks';

const INIT_STATE = { fetching: false, enitity: '', list: [] };

const {
  FETCH_USERS_INIT,
  FETCH_USERS_COMMIT,
  FETCH_USERS_ROLLBACK,
  FETCH_POSTS_INIT,
  FETCH_POSTS_COMMIT,
  FETCH_POSTS_ROLLBACK,
  FETCH_ALBUMS_INIT,
  FETCH_ALBUMS_COMMIT,
  FETCH_ALBUMS_ROLLBACK,
} = types;

const fetchInit = entity => state => ({ ...state, fetching: true, entity });
const fetchCommit = (state, { payload }) => ({ ...state, fetching: false, list: payload });
const fetchRollback = (state, { meta }) => ({
  ...state,
  fetching: false,
  error: meta.error,
});

const mockReducers = {
  [FETCH_USERS_INIT]: fetchInit('User'),
  [FETCH_USERS_COMMIT]: fetchCommit,
  [FETCH_USERS_ROLLBACK]: fetchRollback,
  [FETCH_POSTS_INIT]: fetchInit('Posts'),
  [FETCH_POSTS_COMMIT]: fetchCommit,
  [FETCH_POSTS_ROLLBACK]: fetchRollback,
  [FETCH_ALBUMS_INIT]: fetchInit('Albums'),
  [FETCH_ALBUMS_COMMIT]: fetchCommit,
  [FETCH_ALBUMS_ROLLBACK]: fetchRollback,
};

export default processReducer(mockReducers, INIT_STATE);
