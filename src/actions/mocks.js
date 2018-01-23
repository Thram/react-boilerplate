import { actionType } from '../utils/tools';
import {
  getUsers as getUsersApi,
  getPosts as getPostsApi,
  getAlbums as getAlbumsApi,
} from '../api/mocks';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_COMMIT = 'FETCH_COMMIT';
const FETCH_ROLLBACK = 'FETCH_ROLLBACK';

const usersType = actionType('users');
const FETCH_USERS_INIT = usersType(FETCH_INIT);
const fetchUsersInit = options => ({ type: FETCH_USERS_INIT, meta: { options } });

const FETCH_USERS_COMMIT = usersType(FETCH_COMMIT);
const fetchUsersCommit = users => ({
  type: FETCH_USERS_COMMIT,
  payload: users,
});

const FETCH_USERS_ROLLBACK = usersType(FETCH_ROLLBACK);
const fetchUsersRollback = error => ({
  type: FETCH_USERS_ROLLBACK,
  meta: { error },
});

const getUsers = options => (dipatch) => {
  dipatch(fetchUsersInit(options));
  getUsersApi()
    .then(users => dipatch(fetchUsersCommit(users)))
    .catch(error => dipatch(fetchUsersRollback(error)));
};

const postsType = actionType('posts');
const FETCH_POSTS_INIT = postsType(FETCH_INIT);
const fetchPostsInit = options => ({ type: FETCH_POSTS_INIT, meta: { options } });

const FETCH_POSTS_COMMIT = postsType(FETCH_COMMIT);
const fetchPostsCommit = posts => ({
  type: FETCH_POSTS_COMMIT,
  payload: posts,
});

const FETCH_POSTS_ROLLBACK = postsType(FETCH_ROLLBACK);
const fetchPostsRollback = error => ({
  type: FETCH_POSTS_ROLLBACK,
  meta: { error },
});

const getPosts = options => (dipatch) => {
  dipatch(fetchPostsInit(options));
  getPostsApi()
    .then(posts => dipatch(fetchPostsCommit(posts)))
    .catch(error => dipatch(fetchPostsRollback(error)));
};

const albumsType = actionType('albums');
const FETCH_ALBUMS_INIT = albumsType(FETCH_INIT);
const fetchAlbumsInit = options => ({ type: FETCH_ALBUMS_INIT, meta: { options } });

const FETCH_ALBUMS_COMMIT = albumsType(FETCH_COMMIT);
const fetchAlbumsCommit = albums => ({
  type: FETCH_ALBUMS_COMMIT,
  payload: albums,
});

const FETCH_ALBUMS_ROLLBACK = albumsType(FETCH_ROLLBACK);
const fetchAlbumsRollback = error => ({
  type: FETCH_ALBUMS_ROLLBACK,
  meta: { error },
});

const getAlbums = options => (dipatch) => {
  dipatch(fetchAlbumsInit(options));
  getAlbumsApi()
    .then(albums => dipatch(fetchAlbumsCommit(albums)))
    .catch(error => dipatch(fetchAlbumsRollback(error)));
};

const types = {
  FETCH_USERS_INIT,
  FETCH_USERS_COMMIT,
  FETCH_USERS_ROLLBACK,
  FETCH_POSTS_INIT,
  FETCH_POSTS_COMMIT,
  FETCH_POSTS_ROLLBACK,
  FETCH_ALBUMS_INIT,
  FETCH_ALBUMS_COMMIT,
  FETCH_ALBUMS_ROLLBACK,
};

export { types, getUsers, getPosts, getAlbums };

export default {
  types,
  getUsers,
  getPosts,
  getAlbums,
};
