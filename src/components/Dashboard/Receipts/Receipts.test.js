import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Receipts from './Receipts.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  // Props go here...
};

const testElement = <Receipts {...defaultProps} />;

describe('<Receipts />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
