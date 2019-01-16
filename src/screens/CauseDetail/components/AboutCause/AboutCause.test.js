import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import AboutCause from './AboutCause.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  // props...
};

const testElement = <AboutCause {...defaultProps} />;

describe('<AboutCause />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
