import React from 'react';
import { shallow } from 'enzyme';

// Component import
import CartItem from './CartItem.js';

const defaultProps = {
  // Put props here...
};

const wrapper = shallow(<CartItem {...defaultProps} />);

describe('<CartItem />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.CartItem')).toBe(true);
  });
});
