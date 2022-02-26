import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'store';

// Component import
import BottomMenu from './BottomMenu.js';
import bottomNavLinks from 'constants/BottomNavLinks';

const defaultProps = {
    navLinks: bottomNavLinks,
};

const wrapper = shallow(
    <Provider store={store}>
        <BottomMenu {...defaultProps} />
    </Provider>
);

describe('<BottomMenu />', () => {

    it('renders without crashing', () => {
        console.log(wrapper.debug());
        expect(wrapper.exists('Memo(BottomMenu)')).toBe(true);
    });
});