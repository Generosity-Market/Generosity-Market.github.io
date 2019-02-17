import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import UserCauses from './UserCauses.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {};

const testElement =
  <BrowserRouter>
    <UserCauses {...defaultProps} />
  </BrowserRouter>;

describe('<UserCauses />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
