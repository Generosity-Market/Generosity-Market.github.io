import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

export const HeadContainer = ({
    children,
    pageData: {
        description,
        image,
        title,
        url,
    },
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url || window.location.href} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="description" content={description} />

            {children}
        </Helmet>
    );
};

const mapStateToProps = ({ pageData }) => ({ pageData });

export default connect(mapStateToProps, null)(HeadContainer);
