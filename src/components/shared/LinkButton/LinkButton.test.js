import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import LinkButton from './LinkButton.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    href: 'https://google.com',
    classname: 'LinkButton',
    linkText: 'Google.com'
};

const testElement = <LinkButton {...defaultProps} />;

describe('<LinkButton />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(testElement, div);
    });
});
