import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import reducers from './reducers';
import createStore from './store';
import ContentProvider from './containers/ContentProvider';
import App from './containers/App';
import './styles/main.css';

const { store, persistor } = createStore(reducers, {
  logger: process.env.NODE_ENV === 'development',
});

const onBeforeLift = () => {
  console.log('onBeforeLift');
  // take some action before the gate lifts
};

const Loading = () => <div>Loading...</div>;

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} onBeforeLift={onBeforeLift} persistor={persistor}>
      <ContentProvider>
        <App />
      </ContentProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
