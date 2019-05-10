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
    /**
    * On click handler
    */
    onClick: PropTypes.func,
    /**
    * String values that help determine icon size
    */
    size: PropTypes.string, // need to change to array of specific values 'PropTypes.onOf([ 'values' ])'
    /**
    * Style object to pass to icon
    */
    style: PropTypes.object,
};

export default FontAwesome;
