import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';

// Shared UI Components
import {
    InputGroup,
} from 'components/shared';

const inputOptions = [
    {
        type: 'text',
        name: 'legal_name',
        placeholder: 'Legal Name of Organization',
    }, {
        type: 'text',
        name: 'tax_id',
        placeholder: 'Tax Id #',
    },
];

export const VerificationInputGroup = ({
    handleUpdateState,
    state,
}) => {
    return (
        <div className="VerificationInputGroup">
            <InputGroup
                state={state}
                handleUpdateState={handleUpdateState}
                inputOptions={inputOptions}
            />
        </div>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationInputGroup);
