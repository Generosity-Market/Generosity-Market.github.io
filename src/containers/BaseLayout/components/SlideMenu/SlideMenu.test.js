import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import SlideMenu from './SlideMenu.js';
import navLinks from '../../linksData.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    navLinks: navLinks,
};

const testElement = <SlideMenu {...defaultProps} />;

describe('<SlideMenu />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(testElement, div);
    });
});
