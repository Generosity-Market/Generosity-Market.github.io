import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MiniButton.css';

const MiniButton = ({
    className,
    onClick,
    children,
}) =>
    <div
        className={`btns ${className}`}
        onClick={(e) => onClick(e)}
    >
        {children}
    </div>;

MiniButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default MiniButton;
