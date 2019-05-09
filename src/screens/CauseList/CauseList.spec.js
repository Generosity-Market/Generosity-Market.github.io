import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseList } from './CauseList';

const defaultProps = {
    causeList: [],
    causeSelected: jest.fn(),
    getCauseList: jest.fn(),
};

const wrapper = shallow(<CauseList {...defaultProps} />);

describe('<CauseList />', () => {

    it('should not render when there are no causes', () => {
        expect(wrapper.exists('.CauseList')).toBe(false);
    });

    it('renders without crashing', () => {
        wrapper.setProps({
            causeList: [
                {
                    id: 1,
                },
            ]
        });

        expect(wrapper.exists('.CauseList')).toBe(true);
    });

    it.todo('Test other things on the CauseList page');
});
