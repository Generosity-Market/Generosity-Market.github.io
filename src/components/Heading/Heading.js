import React from 'react';

const Styles = {
  borderBottom: 'var(--border)',
  color: 'var(--bright-green)',
  margin: '0 auto 1rem',
  paddingBottom: '0.5rem',
  width: '95%'
}

const Heading = props =>
<h3 className="Heading" style={Styles}>{props.text}</h3>

export default Heading;
