import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const FontAwesome = ({
    icon,
    onClick,
    size,
    style,
    ...rest
}) =>
    (
        <FontAwesomeIcon
            icon={icon}
            onClick={onClick}
            size={size}
            style={style}
            {...rest}
        />
    );

FontAwesome.defaultProps = {};

FontAwesome.propTypes = {
    /**
     * The font awesome icon to render
     */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};

export default FontAwesome;
