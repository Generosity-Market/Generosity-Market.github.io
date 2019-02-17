import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from 'reducers/reducer';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Receipts from './Receipts.js';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk)
  )
);

const defaultProps = {
  // Props go here...
};

const testElement = (
  <BrowserRouter>
    <Receipts {...defaultProps} store={store} />
  </BrowserRouter>
);

describe('<Receipts />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
