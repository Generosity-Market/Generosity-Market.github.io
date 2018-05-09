import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkButton extends Component {

  // takes two props 'href' and the 'linkText'
  render() {
    let { href, classname, linkText } = this.props;
    let linkStyles = {
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

    return (
      <div className="LinkButton">

        { href ?
          href.includes('https://') ?
        <a
        href={href || '#'} className={classname} style={linkStyles}>{linkText}</a> :

        <Link to={href || '#'} className={classname} style={linkStyles}>{linkText}</Link> : '' }

      </div>
    );
  }
};
