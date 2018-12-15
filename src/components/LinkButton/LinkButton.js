import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ href, classname, linkText }) => {
  const isExternalLink = (href) => href.includes('https://');
  let externalLink;
  if (href) {
    externalLink = isExternalLink(href);
  }

  const anchor = 
    <a
      href={href}
      className={classname}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyles}
    >
      {linkText}
    </a>;

  const link = 
    <Link
      to={href || '#'}
      className={classname}
      style={linkStyles}
    >
      {linkText}
    </Link>;

  return (
    <div className="LinkButton">
      { externalLink ? anchor : link }
    </div>
  );
};

const linkStyles = {
    width:          '100%',
    height:         '100%',
    display:        'inline-block',
    padding:        '1.25rem 0rem',
    cursor:         'pointer',
    fontSize:       '18px',
    textTransform:  'uppercase',
    textDecoration: 'none',
    textAlign:      'center'
};

export default LinkButton;