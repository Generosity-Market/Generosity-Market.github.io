import React from 'react';
import { shallow } from 'enzyme';

// Component import
import UserCauses from './UserCauses.js';

const defaultProps = {};

const wrapper = shallow(<UserCauses {...defaultProps} />);

describe('<UserCauses />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.UserCauses')).toBe(true);
  });
});
