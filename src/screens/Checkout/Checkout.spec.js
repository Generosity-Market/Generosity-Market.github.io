import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Checkout } from './Checkout.js';

const defaultProps = {
  cart: [{
    amount: 5
  }],
};

const wrapper = shallow(<Checkout {...defaultProps} />);

describe('<Checkout />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.Checkout')).toEqual(true);
  });
});
