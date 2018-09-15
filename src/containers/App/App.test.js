import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/reducer';

let store = createStore(reducers);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , div );
});
