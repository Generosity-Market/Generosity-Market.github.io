import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({
    label,
    name,
    onChange,
    placeholder,
    value,
    ...rest
}) => {

    return (
        <div className="form-row">
            <label htmlFor={name} className="label-helper">
                {label}
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