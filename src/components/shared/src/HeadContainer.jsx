import React from 'react';
import { Helmet } from 'react-helmet';

const HeadContainer = ({
    children,
    description = '',
    image = require('../../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png'),
    title = 'Generosity Market',
    url = null,
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url || window.location.href} />
            <meta name="twitter:card" content="summary_large_image" />

            {children}
        </Helmet>
    );
};

export default HeadContainer;
