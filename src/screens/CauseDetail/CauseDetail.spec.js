import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseDetail } from './CauseDetail.js';

const defaultProps = {
  cause: {
    Donations: [],
  },

};

const wrapper = shallow(<CauseDetail {...defaultProps} />);

describe('<CauseDetail />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.CauseDetail')).toBe(true);
  });
});
