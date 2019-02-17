import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import BottomMenu from './BottomMenu.js';
import bottomNavLinks from '../../linksData';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    navLinks: bottomNavLinks,
};

const testElement =
    <BrowserRouter>
        <BottomMenu {...defaultProps} />
    </BrowserRouter>;

describe('<BottomMenu />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(testElement, div);
    });
});