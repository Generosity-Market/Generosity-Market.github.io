import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

const selectOptions = ['Trip', 'Mission', 'Adoption', 'Camp', 'Community Project'];

export const CauseForm = ({ user }) => {

    const navigate = useNavigate();

    // TODO: Split up state where applicable
    const [state, setState] = useState({
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
    });
    const [status, setStatus] = useState('');

    const handleButtonText = () => {
        switch (status) {
            case 'loading':
                return 'Sending...';
            case 'success':
                return '√ Published';
            case 'failed':
                return 'Failed - Retry';
            default:
                return 'Publish your cause';
        };
    };

    const handleSelectIcon = (name) => {
        setState(state => ({ ...state, icon: name }));
    };

    const handleUpdateState = (field) => {
        return (event) => {
            if ((field === 'round_image') || (field === 'white_text')) {
                setState(state => ({ ...state, [field]: !state[field] }));
            } else {
                setState(state => ({ ...state, [field]: event.target.value }));
            }
        };
    };

    const handleImageChange = (event, field, url) => {
        event.preventDefault();
        if (event.target.files) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                setState(state => ({
                    ...state,
                    [field]: file,
                    [url]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setState(state => ({
                ...state,
                [field]: '',
                [url]: ''
            }));
        }
    };

    const handlePublish = async () => {
        // console.log('handle uploading-', this.state);
        setStatus('loading');

        const causeData = {
            ...state,
            bucket: 'cause',
            user_id: user.id,
        };

        const uploadFinished = (status) => {
            setStatus(`${status}`);
            setTimeout(() => setStatus(''), 3000);
        };

        try {
            const response = await submitCauseForm(causeData);

            if (response.error) {
                uploadFinished('failed');
            } else {
                uploadFinished('success');
                setTimeout(() => navigate(`/cause/${response.cause_id}`), 1000);
            }
        } catch (error) {
            uploadFinished('failed');
        }
    };

    return (
        <div className="CauseForm">

            <ImageUploaderControlled
                handleImageChange={handleImageChange}
                handleUpdateState={handleUpdateState}
                name={state.name}
                profileURL={state.profileURL}
                coverURL={state.coverURL}
                round_image={state.round_image}
                whiteText={state.whiteText}
            />
            <Heading text={'Select Your Cause\'s Profile & Cover Images'} />

            <InputGroup
                state={state}
                handleUpdateState={handleUpdateState}
                inputOptions={causeFormOptions}
                selectOptions={selectOptions}
            />

            <Heading text={'Select Your Fundraising Icon'} />
            <IconSelector handleSelect={handleSelectIcon} />

            <Button
                bsStyle='success'
                bsSize='long'
                label={handleButtonText()}
                onClick={handlePublish}
            />

        </div>
    );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { addCause };

export default connect(mapStateToProps, mapDispatchToProps)(CauseForm);
