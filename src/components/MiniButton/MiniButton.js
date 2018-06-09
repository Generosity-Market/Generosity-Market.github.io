import React from 'react';

const MiniButton = (props) =>
  <div className={`${props.classname} btns`} onClick={(e) => props.onClick(e)}>
    {props.children}
  </div>;

export default MiniButton;
