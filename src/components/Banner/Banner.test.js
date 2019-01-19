import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import Banner from './Banner.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  BGimage: 'to be decided...',
  mainImage: 'dilly dilly',
};

const testElement = <Banner {...defaultProps} />;

describe('<Banner />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
