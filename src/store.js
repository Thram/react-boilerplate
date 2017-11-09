import { compact } from 'lodash';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const config = {
  key: 'root',
  storage,
};

export default (reducers, options = { devTools: false, logger: false }) => {
  const combinedReducers = persistCombineReducers(config, reducers);
  const middlewares = compact([thunk, options.logger && logger]);
  const extensions = compact([
    options.devTools &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
  ]);
  const store = compose(...extensions)(createStore)(combinedReducers);
  const persistor = persistStore(store);
  return { persistor, store };
};
