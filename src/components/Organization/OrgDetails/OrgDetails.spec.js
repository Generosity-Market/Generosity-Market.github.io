import React from 'react';
import { shallow } from 'enzyme';

// Component import
import OrgDetails from './OrgDetails.js';

const defaultProps = {
  // props...
};

const wrapper = shallow(<OrgDetails {...defaultProps} />);

describe('<OrgDetails />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.OrgDetails')).toBe(true);
  });
});
