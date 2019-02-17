import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import CartItem from './CartItem.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  // Put props here...
};

const testElement = <CartItem {...defaultProps} />;

describe('<CartItem />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
