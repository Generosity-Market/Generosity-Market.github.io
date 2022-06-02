import React from 'react';
import Helmet from 'react-helmet';
import { render } from '@testing-library/react';
import { TestProvider, checkConsoleWarnOrErrors } from 'utilities/testing';

// Component import
import { HeadContainer } from '../src/HeadContainer';

const getMetaTag = (metaTags, property) => {
    return metaTags.filter(tag => tag.property === property || tag.name === property)[0];
};

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

const testComponent = <HeadContainer {...defaultProps} />;

describe('<HeadContainer />', () => {
    checkConsoleWarnOrErrors();

    let title;
    let metaTags;

    beforeEach(() => {
        render(testComponent, { wrapper: TestProvider });

        ({ title, metaTags } = Helmet.peek());
    });

    it('should render page title element', () => {
        expect(title).toEqual('Generosity Market');
    });

    it('should render open graph meta title', () => {
        expect(getMetaTag(metaTags, 'og:title').content).toBe(defaultProps.pageData.title);
    });

    it('should render open graph meta description', () => {
        expect(getMetaTag(metaTags, 'og:description').content).toBe(defaultProps.pageData.description);
    });

    it('should render open graph meta image', () => {
        expect(getMetaTag(metaTags, 'og:image').content).toBe(defaultProps.pageData.image);
    });

    it('should render open graph meta url', () => {
        expect(getMetaTag(metaTags, 'og:url').content).toBe(window.location.href);
    });

    it('should render twitter card meta tag', () => {
        expect(getMetaTag(metaTags, 'twitter:card').content).toBe('summary_large_image');
    });

    it('should render children tags', () => {
        render(
            <HeadContainer {...defaultProps}>
                <meta property="child-tag" content="child-content" />
            </HeadContainer>, { wrapper: TestProvider });

        const { metaTags } = Helmet.peek();

        expect(getMetaTag(metaTags, 'child-tag').content).toBe('child-content');
    });
});
