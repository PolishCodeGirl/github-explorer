import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles';

import App from './App';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
