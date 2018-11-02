import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import './DonorComments.css';

class DonorComments extends Component {

  getDonorImage = imageURL => require(`../../../../Assets/Photography/Mobile/${imageURL}`);

  render() {
    let donorComments = this.props.donations.map((donation, index) => {
      return donation.Comments.length > 0 && (
        <div key={index} className="comment-card">
          <div style={{flexBasis: '10%'}}>
            {donation.imageURL ? <img src={this.getDonorImage(donation.imageURL)} alt='Donor'/> : ''}
            <p className='donor-amount'>${donation.amount}</p>
          </div>
          <div style={{flexBasis: '65%'}}>
            <p style={{color: 'var(--text-gray)'}}>{donation.comment}</p>
            <p style={{color: 'var(--bright-green)', marginTop: '0.35rem'}}>- {donation.name}</p>
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
  }
};

export default DonorComments;
