import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = ({
    onClick,
    classname,
    style
}) =>
    (
        <i onClick={onClick} className={classname} style={style}></i>
    );

FontAwesome.propTypes = {
    /**
     * The font awesome classname to apply to the root node
     */
    className: PropTypes.string.isRequired,
};

FontAwesome.defaultProps = {};

export default FontAwesome;
