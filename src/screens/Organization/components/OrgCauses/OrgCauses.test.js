import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import causes from '../../../../../public/api/causes.json';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import OrgCauses from './OrgCauses.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  causes: causes,
};

const testElement =
  <BrowserRouter>
    <OrgCauses {...defaultProps} />
  </BrowserRouter>;

describe('<OrgCauses />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
  });
});
