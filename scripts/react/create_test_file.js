/* eslint-disable indent */
const createFile = require('../create_file.js');
const createPath = require('../create_path.js');

function createContent(component) {
    return (
        `import React from 'react';
import { shallow } from 'enzyme';

// Shared UI Components
import { ${component} } from 'components/shared';

const defaultProps = {
    // ...props
};

const wrapper = shallow(<${component} {...defaultProps} />);

describe('<${component} />', () => {
    it('should render without crashing', () => {
        expect(wrapper.exists('.${component}')).toEqual(true);
    });
});
`
    );
}

function createStyles(name) {
    const path = createPath('test', name);
    createFile(path, createContent(name));
}

module.exports = createStyles;