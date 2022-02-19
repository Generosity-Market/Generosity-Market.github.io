import React from 'react';
import '../styles/AddressInputs.css';
// import { PropTypes } from 'prop-types';

import {
    TextInput,
} from 'components/shared';

const AddressInputs = ({
    address_1,
    address_2,
    city,
    state,
    zipcode,
    ...rest
}) => {

    return (
        <div className="AddressInputs">
            <p>Address</p>
            <TextInput
                label="Address:"
                name="address_1"
                placeholder="Ex: 123 ABC Street"
                value={address_1}
                {...rest}
            />
            <TextInput
                label="Address 2:"
                name="address_2"
                placeholder="Ex: Apt 456"
                value={address_2}
                {...rest}
            />
            <TextInput
                label="City:"
                name="city"
                placeholder="Ex: Atlanta"
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