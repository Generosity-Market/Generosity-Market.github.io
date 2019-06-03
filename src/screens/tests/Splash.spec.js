import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Splash } from '../src/Splash';

const defaultProps = {
    getCauseList: jest.fn(),
    loadTokenFromCookie: jest.fn(),
};

const wrapper = shallow(<Splash {...defaultProps} />);

describe('<Splash />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Splash')).toEqual(true);
    });

    it.todo('Test other things on the Splash page');
});
