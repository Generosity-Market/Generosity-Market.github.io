import React from 'react';
import { shallow } from 'enzyme';

import DownloadCSV from '../src/DownloadCSV';

const defaultProps = {
    filename: 'my file',
    classname: 'my-file',
    csvData: [],
};

const wrapper = shallow(<DownloadCSV {...defaultProps} />);

describe('<DownloadCSV />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.csv-download')).toEqual(true);
    });
});