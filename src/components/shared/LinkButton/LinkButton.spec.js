import React from 'react';
import { shallow } from 'enzyme';

// Component import
import LinkButton from './LinkButton.js';

const defaultProps = {
    href: 'https://google.com',
    classname: 'LinkButton',
    linkText: 'Google.com'
};

const wrapper = shallow(<LinkButton {...defaultProps} />);

describe('<LinkButton />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.LinkButton')).toBe(true);
    });
});
