import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { NewOrgForm } from './NewOrgForm.js';

const defaultProps = {
    // props...
};

const wrapper = shallow(<NewOrgForm {...defaultProps} />);

describe('<NewOrgForm />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.NewOrgForm')).toEqual(true);
    });
});
