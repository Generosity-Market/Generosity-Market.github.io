import React from 'react';
import '../styles/AddressInputs.css';
// import { PropTypes } from 'prop-types';

import {
    TextInput,
} from 'components/shared';

const AddressInputs = ({
    city,
    state,
    street,
    zipcode,
    ...rest,
}) => {

    return (
        <div className="AddressInputs">
            <p>Address</p>
            <TextInput
                label="Street:"
                name="street"
                placeholder="Ex: 123 ABC Street"
                value={street}
                {...rest}
            />
            <TextInput
                label="City:"
                name="city"
                placeholder="Ex: 123 ABC Street"
                value={city}
                {...rest}
            />
            <div className="flex">
                <TextInput
                    label="State:"
                    name="state"
                    placeholder="Ex: GA"
                    value={state}
                    inputStyle={{ width: '40%' }}
                    {...rest}
                />

                <TextInput
                    label="Zip:"
                    name="zipcode"
                    placeholder="Ex: 90210"
                    value={zipcode}
                    inputStyle={{ width: '40%' }}
                    {...rest}
                />
            </div>
        </div>
    );
};

AddressInputs.propTypes = {};

AddressInputs.defaultProps = {};

export default AddressInputs;