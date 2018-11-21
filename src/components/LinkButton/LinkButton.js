import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkButton extends Component {
  isExternalLink = (href) => href.includes('https://');
  render() {
    const { href, classname, linkText } = this.props;
    let externalLink;
    if (href) {
      externalLink = this.isExternalLink(href);
    }

    return (
      <div className="LinkButton">
        { externalLink ?
          <a href={href} className={classname} target="_blank" rel="noopener noreferrer" style={linkStyles}>{linkText}</a> :
        <Link to={href || '#'} className={classname} style={linkStyles}>{linkText}</Link> }
      </div>
    );
  }
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
