import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux imports
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../reducers/reducer';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Checkout from './Checkout.js';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk)
  )
);

const defaultProps = {
  cart: [{
    amount: 5
  }],
};

const testElement =
  <BrowserRouter>
    <Checkout {...defaultProps} store={store} />
  </BrowserRouter>;

describe('<Checkout />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
