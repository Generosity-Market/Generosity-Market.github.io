import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

import {
    FontAwesome
} from 'components/shared';

const Tile = ({
    icon,
    handleClick,
    children,
    uiContext,
}) => {

    return (
        <div
            className={`Tile ${uiContext}`}
            onClick={handleClick}
        >
            {icon &&
                <FontAwesome icon={icon} />
            }

            {children}
        </div>
    );
}

Tile.propTypes = {
    /**
    * The classname to apply to the root node
    */
    uiContext: PropTypes.oneOf([
        'default',
        'active',
        'danger',
        'info',
        'success',
    ]),
	/**
    * The children (usually text) to render at the root nodes
    */
    children: PropTypes.string.isRequired,
	/**
    * The Handler for action button click
    */
    handleClick: PropTypes.func,
	/**
    * The name of the Font Awesome icon to pass to the FontAwesome component
    */
    icon: PropTypes.string,
}

Tile.defaultProps = {
    onClick: () => { },
    uiContext: 'default',
    children: '',
}

export default Tile;