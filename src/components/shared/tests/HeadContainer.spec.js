import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { HeadContainer } from '../src/HeadContainer';

const defaultProps = {
    pageData: {
        pageName: null,
        description: 'Fundraising platform for non-profits and charities',
        text: 'Fundraising platform for non-profits and charities',
        image: 'Artboard-1-copy-2Generosity-Logo.png',
        title: 'Generosity Market',
        url: window.location.href,
    },
};

const wrapper = shallow(<HeadContainer {...defaultProps} />);

describe('<HeadContainer />', () => {

    it('should render page title element', () => {
        expect(wrapper.find('title').text()).toEqual('Generosity Market');
    });

    it('should render open graph meta title', () => {
        expect(wrapper.find('meta[property="og:title"]').props().content).toEqual('Generosity Market');
    });

    it('should render open graph meta description', () => {
        expect(wrapper.find('meta[property="og:description"]').props().content).toEqual('Fundraising platform for non-profits and charities');
    });

    it('should render open graph meta image', () => {
        expect(wrapper.find('meta[property="og:image"]').props().content).toEqual('Artboard-1-copy-2Generosity-Logo.png');
    });

    it('should render open graph meta url', () => {
        expect(wrapper.find('meta[property="og:url"]').props().content).toEqual('http://localhost/');
    });

    it('should render twitter card meta tag', () => {
        expect(wrapper.find('meta[name="twitter:card"]').props().content).toEqual('summary_large_image');
    });

    it('should render children tags', () => {
        wrapper.setProps({ children: <meta property="child-tag" content="child-content" /> });
        expect(wrapper.find('meta[property="child-tag"]').exists()).toBe(true);
    });
});
