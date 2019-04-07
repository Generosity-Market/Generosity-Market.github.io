import React from 'react';
import { PropTypes } from 'prop-types';
import './PhoneInput.css';

const PhoneInput = ({
    className,
    label,
    onChange,
    placeholder,
    value,
    ...rest
}) => {

    return (
        <div className={`form-row ${className}`}>
            <label htmlFor='phone' className="label-helper">
                {label}
            </label>
            <input
                className="input-phone"
                type="tel"
                name="phone"
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
    * The class name to add to the root node
    */
    className: PropTypes.string,
    /**
    * Label to render for the input
    */
    label: PropTypes.string.isRequired,
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
