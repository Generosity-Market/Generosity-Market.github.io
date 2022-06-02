import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

import DownloadCSV from '../src/DownloadCSV';

const defaultProps = {
    filename: 'my file',
    classname: 'my-file',
    csvData: [],
};

const testComponent = <DownloadCSV {...defaultProps} />;

describe('<DownloadCSV />', () => {
    checkConsoleWarnOrErrors();

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.csv-download')).toBeInTheDocument();
    });
});