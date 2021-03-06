import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { NewOrgForm } from '../src/NewOrgForm';

const defaultProps = {
    // props...
};

const wrapper = shallow(<NewOrgForm {...defaultProps} />);

describe('<NewOrgForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.NewOrgForm')).toEqual(true);
    });

    it.todo('Test other things on the NewOrgForm page');
});
