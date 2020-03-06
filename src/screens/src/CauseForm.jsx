import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import causeFormOptions from '../config/causeFormOptions';
import '../styles/CauseForm.css';

import {
    addCause,
    submitCauseForm,
} from 'ducks/cause';

// Shared UI Component
import { Button } from '@jgordy24/stalls-ui';
import {
    Heading,
    ImageUploaderControlled,
    InputGroup,
} from 'components/shared';

// Cause Form Components
import {
    IconSelector,
} from 'components/containers/CauseForm';

export class CauseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: null,
            name: '',
            type: '',
            organization_name: '',
            tax_id: '',
            goal: '',
            description: '',
            purpose: '',
            profile_image: '',
            profileURL: '',
            cover_image: '',
            coverURL: '',
            round_image: true,
            white_text: true,

            status: '',
        };

        this.selectOptions = ['Trip', 'Mission', 'Adoption', 'Camp', 'Community Project'];
    }

    handleButtonText = () => {
        switch (this.state.status) {
            case 'loading':
                return 'Sending...';
            case 'success':
                return '√ Published';
            case 'failed':
                return 'Failed - Retry';
            default:
                return 'Publish your cause';
        }
    }

    handleSelectIcon = (name) => {
        this.setState({ icon: name });
    }

    handleUpdateState = (field) => {
        return (event) => {
            if ((field === 'round_image') || (field === 'white_text')) {
                this.setState({ [field]: !this.state[field] });
            } else {
                this.setState({ [field]: event.target.value });
            }
        };
    };

    handleImageChange = (event, field, url) => {
        event.preventDefault();
        if (event.target.files) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    [field]: file,
                    [url]: reader.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            this.setState({
                [field]: '',
                [url]: ''
            });
        }
    };

    handlePublish = async () => {
        // console.log('handle uploading-', this.state);
        this.setState({ status: 'loading' });

        const causeData = {
            ...this.state,
            bucket: 'cause',
            user_id: this.props.user.id,
        };

        const uploadFinished = (status) => {
            this.setState({ status });
            setTimeout(() => this.setState({ status: false }), 3000);
        };

        try {
            const response = await submitCauseForm(causeData);

            if (response.error) {
                uploadFinished('failed');
            } else {
                uploadFinished('success');
                setTimeout(() => this.props.history.push(`/cause/${response.cause_id}`), 1000);
            }
        } catch (error) {
            uploadFinished('failed');
        }
    };

    render() {
        // console.log("Cause Form Props: ", this.props);
        return (
            <div className="CauseForm">

                <ImageUploaderControlled
                    handleImageChange={this.handleImageChange}
                    handleUpdateState={this.handleUpdateState}
                    name={this.state.name}
                    profileURL={this.state.profileURL}
                    coverURL={this.state.coverURL}
                    round_image={this.state.round_image}
                    whiteText={this.state.whiteText}
                />
                <Heading text={'Select Your Cause\'s Profile & Cover Images'} />

                <InputGroup
                    state={this.state}
                    handleUpdateState={this.handleUpdateState}
                    inputOptions={causeFormOptions}
                    selectOptions={this.selectOptions}
                />

                <Heading text={'Select Your Fundraising Icon'} />
                <IconSelector handleSelect={this.handleSelectIcon} />

                <Button
                    bsStyle='success'
                    label={this.handleButtonText()}
                    onClick={this.handlePublish}
                />

            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { addCause };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CauseForm));
