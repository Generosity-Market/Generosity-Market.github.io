import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import UserDetails from './UserDetails.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  address: {},
  name: '',
  phone: '',
};

const testElement = <UserDetails {...defaultProps} />;

describe('<UserDetails />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
