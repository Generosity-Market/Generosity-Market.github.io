import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import './EditProfileCTAs.css';

// Shared UI Components
import { FontAwesome } from 'components/shared';

const IconCta = ({
    icon,
    onClick,
    label,
}) =>
    (
        <div className="edit-ctas" onClick={onClick}>
            <FontAwesome
                icon={icon}
                size='2x'
            />
            <p>{label}</p>
        </div>
    );

const EditProfileCTAs = ({
    editProfile,
    handleEditProfile,
    handleSubmit,
    handleUndoChanges,
    handleCancelEdit,
}) => {
    if (!editProfile) {
        return (
            <IconCta
                icon='pen'
                onClick={handleEditProfile}
                label='Edit'
            />
        );
    }

    const ctas = [
        { icon: 'save', onClick: handleSubmit, label: 'Save' },
        { icon: 'undo-alt', onClick: handleUndoChanges, label: 'Undo' },
        { icon: 'times', onClick: handleCancelEdit, label: 'Cancel' },
    ];

    return (
        <Fragment>
            {ctas.map(cta => (
                <IconCta
                    key={cta.icon + cta.label}
                    icon={cta.icon}
                    onClick={cta.onClick}
                    label={cta.label}
                />
            ))}
        </Fragment>
    );

};

EditProfileCTAs.propTypes = {};

EditProfileCTAs.defaultProps = {};

export default EditProfileCTAs;
