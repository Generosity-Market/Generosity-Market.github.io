import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Shared UI Components
import {
    InputGroup,
} from 'components';

// Convert to functional component if not using state
class VerificationInputGroup extends Component {

    render() {
        const inputOptions = [
            {
                type: 'text',
                name: 'name',
                placeholder: 'Name of Organization',
            }, {
                type: 'text',
                name: 'tax_id',
                placeholder: 'Tax Id #',
            },
        ]

        return (
            <div className="VerificationInputGroup">
                <InputGroup
                    state={this.props.state}
                    handleUpdateState={this.props.handleUpdateState}
                    inputOptions={inputOptions}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationInputGroup)
