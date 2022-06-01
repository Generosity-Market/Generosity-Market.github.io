import React from 'react';
import { render } from '@testing-library/react';
import { TestProvider } from 'utilities/testing';

// Component import
import ImageUploaderControlled from '../src/ImageUploader';

const defaultProps = {
    handleUpdateState: () => { },
};

const testComponent = <ImageUploaderControlled {...defaultProps} />;

describe('<ImageUploaderControlled />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent, { wrapper: TestProvider }));
    });

    it('renders without crashing', () => {
        expect(container.querySelector('.ImageUploaderControlled')).toBeInTheDocument();
    });
});
