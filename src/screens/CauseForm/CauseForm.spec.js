import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseForm } from './CauseForm.js';

const defaultProps = {};

const wrapper = shallow(<CauseForm {...defaultProps} />);

describe('<CauseForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseForm')).toBe(true);
    });
});
