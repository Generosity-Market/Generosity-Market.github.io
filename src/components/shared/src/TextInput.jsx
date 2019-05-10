import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TextInput.css';

const TextInput = ({
    className,
    label,
    name,
    onChange,
    placeholder,
    inputStyle,
    value,
    ...rest
}) => {

    return (
        <div
            className={`form-row ${className}`}
            style={inputStyle}
        >
            <label htmlFor={name} className="label-helper">
                {label}
                {/* TODO should we add an icon for different validation statuses?? */}
            </label>
            <input
                className="input-text"
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest}
            />
        </div>
    );
};

TextInput.propTypes = {
    /**
    * Class name to pass to the root node
    */
    className: PropTypes.string,
    /**
    * Label to render for the input
    */
    label: PropTypes.string.isRequired,
    /**
    * The name of the input [ 'email', 'username', 'etc...' ]
    */
    name: PropTypes.string.isRequired,
    /**
    * On Change handler
    */
    onChange: PropTypes.func.isRequired,
    /**
    * Input placeholder text
    */
    placeholder: PropTypes.string,
    /**
     * Input's value
     */
    value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {};

export default TextInput;