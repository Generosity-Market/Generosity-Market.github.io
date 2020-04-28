import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CauseDetail } from '../src/CauseDetail';

const defaultProps = {
    cause: {
        Donations: [],
    },
    match: {
        params: {
            id: 2,
        },
    },
    pageData: {
        pageName: null,
        description: 'Fundraising platform for non-profits and charities',
        text: 'Fundraising platform for non-profits and charities',
        image: 'Artboard-1-copy-2Generosity-Logo.png',
        title: 'Generosity Market',
        url: window.location.href,
    },
};

const wrapper = shallow(<CauseDetail {...defaultProps} />);

describe('<CauseDetail />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CauseDetail')).toBe(true);
    });

    it.todo('Test other stuff on the CauseDetail page');
});
