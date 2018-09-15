import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import CartFooter from './CartFooter.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  // Put props here...
};

const testElement = <CartFooter {...defaultProps} />;

describe('<CartFooter />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
