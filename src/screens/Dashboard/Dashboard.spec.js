import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Dashboard } from './Dashboard.js';

const defaultProps = {
  match: {
    params: {
      id: 1
    }
  },
  user: {
    Preferences: [],
  },
  userData: {
    id: 1,
  }
};

const wrapper = shallow(<Dashboard {...defaultProps} />);

describe('<Dashboard />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.Dashboard')).toEqual(true);
  });
});
