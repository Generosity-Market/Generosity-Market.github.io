import React from 'react';
import { shallow } from 'enzyme';

// Component import
import TextSection from '../src/TextSection';

const defaultProps = {};

const wrapper = shallow(<TextSection {...defaultProps} />);

describe('<TextSection />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.TextSection')).toBe(true);
    });
});
