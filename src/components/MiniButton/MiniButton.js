import React from 'react';
import PropTypes from 'prop-types';

const MiniButton = (props) =>
  <div className={`${props.classname} btns`} onClick={(e) => props.onClick(e)}>
    {props.children}
  </div>;

MiniButton.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func
}

export default MiniButton;
