import React from 'react';
import { shallow } from 'enzyme';

import DownloadCSV from './DownloadCSV';

const defaultProps = {
    filename: 'my file',
    classname: 'my-file',
};

const wrapper = shallow(<DownloadCSV {...defaultProps} />);

describe('<DownloadCSV />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.csv-download')).toEqual(true);
    });
});