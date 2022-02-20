import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

// Component import
import { CauseForm } from '../src/CauseForm';

const defaultProps = {};

const wrapper = shallow(
    <BrowserRouter>
        <CauseForm {...defaultProps} />
    </BrowserRouter>
);

describe('<CauseForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('CauseForm')).toBe(true);
    });

    it.todo('test more things on the CauseForm page');
});
