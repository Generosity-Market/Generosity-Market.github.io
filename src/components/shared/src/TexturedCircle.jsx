import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TexturedCircle.css';

const TexturedCircle = ({
    children,
    colorMask,
    className,
}) => {
    return (
        <div className={'textured ' + className}>
            <div
                className="overlay"
                style={{ backgroundColor: `${colorMask}` }}
            >
                {children}
            </div>
        </div>
    );
};

TexturedCircle.propTypes = {
    /**
     * The class to render to the root node
     */
    className: PropTypes.string,
    /**
    * The children to render at the root nodes
    */
    children: PropTypes.node,
    /**
    * The color to overlay on top of the texture. Should be somewhat transparent
    */
    colorMask: PropTypes.string,
};

TexturedCircle.defaultProps = {};

export default TexturedCircle;