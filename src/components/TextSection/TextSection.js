import React from 'react';
import Heading from '../Heading/Heading';
import './TextSection.css';

const TextSection = (props) =>
<div className="TextSection">
  <Heading text={props.heading} />
  <p>{props.text}</p>
</div>


export default TextSection;
