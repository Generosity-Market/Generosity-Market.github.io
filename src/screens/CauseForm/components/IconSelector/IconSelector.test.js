import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import IconSelector from './IconSelector.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  handleSelectIcon: () => {},
};

const testElement = <IconSelector {...defaultProps} />;

describe('<IconSelector />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
