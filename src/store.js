import { compact } from 'lodash';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const config = {
  key: 'root',
  storage,
  blacklist: ['app'],
};

const combinedReducers = persistCombineReducers(config, reducers);
const middlewares = compact([thunk]);
const store = createStore(
  combinedReducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export { persistor, store };
export default { persistor, store };
