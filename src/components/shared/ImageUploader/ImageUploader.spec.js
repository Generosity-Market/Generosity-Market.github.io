import React from 'react';
import { shallow } from 'enzyme';

// Component import
import ImageUploader from './ImageUploader.js';

const defaultProps = {
  handleUpdateState: () => { },
};

const wrapper = shallow(<ImageUploader {...defaultProps} />);

describe('<ImageUploader />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.ImageUploader')).toBe(true);
  });
});
