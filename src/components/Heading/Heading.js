import React from 'react';

const styles = {
  borderBottom: 'var(--border)',
  color: 'var(--bright-green)',
  margin: '1rem auto',
  paddingBottom: '0.5rem',
  width: '92%'
}

const Heading = ({ text }) =>
<h3 className="Heading" style={styles}>{text}</h3>

export default Heading;
