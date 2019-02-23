import React from 'react';
import { shallow } from 'enzyme';

import ReceiptItem from './ReceiptItem.js';

const defaultProps = {
    cause: {
        Donations: [],
    },
};

const wrapper = shallow(<ReceiptItem {...defaultProps} />);

describe('<ReceiptItem />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.ReceiptItem')).toBe(true);
    });
});