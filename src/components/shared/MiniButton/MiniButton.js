import React from 'react';
import PropTypes from 'prop-types';

const MiniButton = ({
  classname,
  onClick,
  children
}) =>
  <div
    className={`${classname} btns`}
    onClick={(e) => onClick(e)}
  >
    {children}
  </div>;

MiniButton.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func
}

export default MiniButton;
