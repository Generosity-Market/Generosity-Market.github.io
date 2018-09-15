import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Heading from './Heading.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    text: 'Nearly Funded',
};

const testElement = <Heading {...defaultProps} />;

describe('<Heading />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
