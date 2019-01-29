import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '../FontAwesome/FontAwesome';
import './Tile.css';

const Tile = ({
    icon,
    onClick,
    children,
    uiContext,
}) => {

    return (
        <div
            className={`Tile ${uiContext}`}
            onClick={onClick}
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
    uiContext: PropTypes.oneOf(['default', 'success', 'info', 'danger', 'active']),
	/**
    * The children (usually text) to render at the root nodes
    */
    children: PropTypes.string.isRequired,
	/**
    * The Handler for action button click
    */
    onClick: PropTypes.func,
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