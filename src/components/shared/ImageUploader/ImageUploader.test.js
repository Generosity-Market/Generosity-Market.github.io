import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import ImageUploader from './ImageUploader.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  handleUpdateState: () => { },
};

const testElement = <ImageUploader {...defaultProps} />;

describe('<ImageUploader />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
