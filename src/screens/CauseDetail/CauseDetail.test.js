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
import SingleCause from './SingleCause.js';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk)
  )
);

const defaultProps = {
  // props...
};

const testElement =
  <BrowserRouter>
    <SingleCause {...defaultProps} store={store} />
  </BrowserRouter>;

describe('<SingleCause />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(testElement);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
