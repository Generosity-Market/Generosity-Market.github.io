import React from 'react';

const Styles = {
  borderBottom: 'var(--border)',
  color: 'var(--bright-green)',
  margin: '1rem auto',
  paddingBottom: '0.5rem',
  width: '92%'
}

const Heading = props =>
<h3 className="Heading" style={Styles}>{props.text}</h3>

export default Heading;
