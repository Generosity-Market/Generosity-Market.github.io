import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

import DownloadCSV from '../src/DownloadCSV';

const defaultProps = {
    filename: 'my file',
    classname: 'my-file',
    csvData: [],
};

const testComponent = <DownloadCSV {...defaultProps} />;

describe('<DownloadCSV />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.csv-download')).toBeInTheDocument();
    });
});