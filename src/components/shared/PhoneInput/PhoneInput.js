import React from 'react';
import { PropTypes } from 'prop-types';
import './PhoneInput.css';

const PhoneInput = ({
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
                className="input-phone"
                type="tel"
                name={name}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest}
            />
        </div>
    );
};

PhoneInput.propTypes = {
    /**
    * Label to render for the input
    */
    label: PropTypes.string.isRequired,
    /**
    * The name of the input [ 'phone', 'phone_number', 'etc...' ]
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

PhoneInput.defaultProps = {};

export default PhoneInput;
