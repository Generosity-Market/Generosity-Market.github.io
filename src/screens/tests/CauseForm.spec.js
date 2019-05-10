import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseForm } from '../src/CauseForm';

const defaultProps = {};

const wrapper = shallow(<CauseForm {...defaultProps} />);

describe('<CauseForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseForm')).toBe(true);
    });

    it.todo('test more things on the CauseForm page');
});
