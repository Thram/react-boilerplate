import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';
import App from './containers/App';
import './styles/main.css';

const onBeforeLift = () => {
  console.log('onBeforeLift');
  // take some action before the gate lifts
};

const Loading = () => <div>Loading...</div>;

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} onBeforeLift={onBeforeLift} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
