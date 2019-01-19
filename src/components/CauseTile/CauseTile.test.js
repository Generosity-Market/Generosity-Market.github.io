import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import CauseTile from './CauseTile.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  cause: {
    id: 1,
    amount: 1000,
    name: 'Example',
    icon: '',
    mainImage: "madi-robson-113926.jpg",
  },
};

const testElement =
  <BrowserRouter>
    <CauseTile {...defaultProps} />
  </BrowserRouter>;

describe('<CauseTile />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
