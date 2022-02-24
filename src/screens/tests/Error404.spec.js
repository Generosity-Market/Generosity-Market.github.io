import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

// Component import
import { Error404 } from '../src/Error404';

const defaultProps = {
    history: {
        goBack: jest.fn(),
    }
};

const wrapper = shallow(
    <BrowserRouter>
        <Error404 {...defaultProps} />
    </BrowserRouter>
);

describe('<Error404 />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('Error404')).toEqual(true);
    });

    it.todo('Test other things on the 404 page');
});
