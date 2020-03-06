import React from 'react';
import './DonorComments.css';

// Shared UI Components
import {
    Heading,
} from 'components/shared';

const DonorComments = ({ donations }) => {
    const getDonorImage = imageURL => require(`Assets/Photography/Mobile/${imageURL}`);

    let donorComments = donations.map((donation, index) => {
        const { Comments, imageURL, amount, comment, name } = donation;

        return Comments && Comments.length > 0 && (
            <div key={index} className="comment-card">
                <div style={{ flexBasis: '10%' }}>
                    {imageURL ? <img src={getDonorImage(imageURL)} alt='Donor' /> : ''}
                    <p className='donor-amount'>${amount}</p>
                </div>
                <div style={{ flexBasis: '65%' }}>
                    <p style={{ color: 'var(--text-gray)' }}>{comment}</p>
                    <p style={{ color: 'var(--bright-green)', marginTop: '0.35rem' }}>- {name}</p>
                </div>
            </div>
        );
    });

    // returns this component if there is at least one comment. Returns null if not.
    return !donorComments.every(index => index === false) && (
        <div className="DonorComments">
            <Heading text={'Donor Comments'} />
            {donorComments}
        </div>
    );
};

export default DonorComments;
