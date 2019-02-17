import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Cart from './Cart.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  handleSelectIcon: () => {},
  cart: [{
    cause: 'Example cause',
    amount: 54,
  }],
};

const testElement = <Cart {...defaultProps} />;

describe('<Cart />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
