import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../reducers/reducer';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import CauseForm from './CauseForm.js';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk)
  )
);

const testElement = (
  <BrowserRouter>
    <CauseForm store={store} />
  </BrowserRouter>
);

describe('<CauseForm />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
