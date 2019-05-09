import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseDetail } from './CauseDetail';

const defaultProps = {
    cause: {
        Donations: [],
    },
};

const wrapper = shallow(<CauseDetail {...defaultProps} />);

describe('<CauseDetail />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseDetail')).toBe(true);
    });

    it.todo('Test other stuff on the CauseDetail page');
});
