import React from 'react';

const FontAwesome = ({
    onClick,
    classname,
    style
}) =>
    <i onClick={onClick} className={classname} style={style}></i>;

export default FontAwesome;
