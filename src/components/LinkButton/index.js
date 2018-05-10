import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkButton extends Component {


  isExternalLink = (href) => {
    return href.includes('https://');
  }
  // NOTE takes two props 'href' and the 'linkText'
  render() {
    const { href, classname, linkText } = this.props;
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
    }
    let externalLink;
    if (href) {
    const externalLink = this.isExternalLink(href);
    }

    return (
      <div className="LinkButton">

        { externalLink ?
        <a
        href={href || '#'} className={classname} style={linkStyles}>{linkText}</a> :

        <Link to={href || '#'} className={classname} style={linkStyles}>{linkText}</Link> }

      </div>
    );
  }
};
