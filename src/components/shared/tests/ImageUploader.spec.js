import React from 'react';
import { shallow } from 'enzyme';

// Component import
import ImageUploaderControlled from '../src/ImageUploader';

const defaultProps = {
    handleUpdateState: () => { },
};

const wrapper = shallow(<ImageUploaderControlled {...defaultProps} />);

describe('<ImageUploaderControlled />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.ImageUploaderControlled')).toBe(true);
    });
});
