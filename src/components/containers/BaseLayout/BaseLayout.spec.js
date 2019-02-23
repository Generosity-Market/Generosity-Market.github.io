import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { BaseLayout } from './BaseLayout.js';

const defaultProps = {
  match: {
    params: {
      id: 1,
    }
  },
  loadTokenFromCookie: jest.fn(),
  getCauseList: jest.fn(),
};

const wrapper = shallow(<BaseLayout {...defaultProps} />);

describe('<BaseLayout />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.BaseLayout')).toEqual(true);
  });
});
