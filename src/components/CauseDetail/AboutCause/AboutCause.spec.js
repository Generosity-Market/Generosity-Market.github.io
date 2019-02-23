import React from 'react';
import { shallow } from 'enzyme';

// Component import
import AboutCause from './AboutCause.js';

const defaultProps = {
  // props...
};

const wrapper = shallow(<AboutCause {...defaultProps} />);

describe('<AboutCause />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.AboutCause')).toBe(true);
  });
});
