import React from 'react';
import Heading from '../Heading/Heading';
import '../styles/TextSection.css';

const TextSection = ({
    heading,
    text,
}) =>
    (
        <div className="TextSection">
            <Heading text={heading} />
            <p>{text}</p>
        </div>
    );


export default TextSection;
