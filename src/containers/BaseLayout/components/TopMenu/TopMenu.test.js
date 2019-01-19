import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import TopMenu from './TopMenu.js';
import navLinks from 'linksData';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  navLinks: navLinks,
};

const testElement =
  <BrowserRouter>
    <TopMenu {...defaultProps} />
  </BrowserRouter>;

describe('<TopMenu />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
