import React from 'react';
import { shallow } from 'enzyme';

// Shared UI Components
import { ActionButton } from 'components/shared';

const defaultProps = {
    action: jest.fn(),
    actionText: 'submit',
    classname: 'submit',
    icon: ''
};

const wrapper = shallow(<ActionButton {...defaultProps} />);

describe('<ActionButton />', () => {
    it('should render without crashing', () => {
        expect(wrapper.exists('.ActionButton')).toEqual(true);
    });

    it('should have the classname passed as props', () => {
        expect(wrapper.find('.submit').hasClass('submit')).toBe(true);
    });

    it('should render the text passed through props', () => {
        expect(wrapper.text()).toBe('submit');
    });

    describe('when clicked', () => {
        beforeEach(() => {
            wrapper.find('.submit').simulate('click');
        });

        it('should call the callback action function', () => {
            expect(defaultProps.action).toHaveBeenCalled();
        });
    });
});
