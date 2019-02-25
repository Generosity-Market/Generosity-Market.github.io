import React from 'react';
import { shallow } from 'enzyme';

// Component import
import OrgCauses from './OrgCauses.js';

const defaultProps = {
    causes: [],
};

const wrapper = shallow(<OrgCauses {...defaultProps} />);

describe('<OrgCauses />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.OrgCauses')).toBe(true);
    });
});
