import React from 'react';
import { shallow } from 'enzyme';

// Component import
import UserDetails from './UserDetails.js';

const defaultProps = {
  address: {},
  name: '',
  phone: '',
};

const wrapper = shallow(<UserDetails {...defaultProps} />);

describe('<UserDetails />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.UserDetails')).toBe(true);
  });
});
