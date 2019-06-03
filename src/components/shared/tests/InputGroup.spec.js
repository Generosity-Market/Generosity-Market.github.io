import React from 'react';
import { shallow } from 'enzyme';

// Component import
import InputGroup from '../src/InputGroup';

const defaultProps = {
    state: {
        name: '',
        tax_id: '',
    },
    inputOptions: [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name of Organization',
        }, {
            type: 'text',
            name: 'tax_id',
            placeholder: 'Tax Id #',
        },
    ],
    handleUpdateState: () => { },
};

const wrapper = shallow(<InputGroup {...defaultProps} />);

describe('<InputGroup />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.InputGroup')).toEqual(true);
    });
});
