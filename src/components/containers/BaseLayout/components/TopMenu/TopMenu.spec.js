import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

// Component import
import TopMenu from './TopMenu.js';

const defaultProps = {};

const wrapper = shallow(
    <BrowserRouter>
        <TopMenu {...defaultProps} />
    </BrowserRouter>
);

describe('<TopMenu />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('TopMenu')).toBe(true);
    });
});
