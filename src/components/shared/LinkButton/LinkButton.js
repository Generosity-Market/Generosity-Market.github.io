import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = ({
    href,
    classname,
    linkText,
    context,
}) => {
    const isExternalLink = (href) => href.includes('https://');
    let externalLink;
    if (href) {
        externalLink = isExternalLink(href);
    }

    const anchor = (
        <a
            href={href}
            className={classname}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
        >
            {linkText}
        </a>
    );

    const link = (
        <Link
            to={{
                pathname: href || '#',
                state: { context }
            }}
            className={classname}
            style={linkStyles}
        >
            {linkText}
        </Link>
    );

    return (
        <div className="LinkButton">
            {externalLink ? anchor : link}
        </div>
    );
};

const linkStyles = {
    width: '100%',
    // height: '100%', // causes strange layout bug... TODO investigate...
    display: 'inline-block',
    padding: '1.25rem 0rem',
    cursor: 'pointer',
    fontSize: '18px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center'
};

LinkButton.propTypes = {
    /**
    * The classname to apply to the root node
    */
    classname: PropTypes.string.isRequired,
    /**
    * The text to render at the root nodes
    */
    linkText: PropTypes.string.isRequired,
    /**
    * The href for navigation button click
    */
    href: PropTypes.string.isRequired,
    /**
    * Context is used to render either the login or signup buttons based on where a user clicks from...
    */
    context: PropTypes.oneOf(['register', 'login', null]),
};

LinkButton.defaultProps = {
    href: '#',
};

export default LinkButton;