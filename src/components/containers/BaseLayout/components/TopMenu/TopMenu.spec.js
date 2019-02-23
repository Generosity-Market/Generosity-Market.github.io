import React from 'react';
import { shallow } from 'enzyme';

// Component import
import TopMenu from './TopMenu.js';

const defaultProps = {};

const wrapper = shallow(<TopMenu {...defaultProps} />);

describe('<TopMenu />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.TopMenu')).toBe(true);
  });
});
