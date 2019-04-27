import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Receipts } from './Receipts.js';

const defaultProps = {
    // Props go here...
};

const wrapper = shallow(<Receipts {...defaultProps} />);

describe('<Receipts />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Receipts')).toBe(true);
    });
});
