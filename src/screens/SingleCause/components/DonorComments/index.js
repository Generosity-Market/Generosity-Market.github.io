import React, { Component } from 'react';
import './DonorComments.css';

class DonorComments extends Component {

  getDonorImage = (imageURL) => {
    return require(`../../../../Assets/Photography/${imageURL}`)
  }

  render() {

    let donorComments = this.props.donorData.map((donor, index) => {

      return (
             <div key={index} className="comment-card">
                <div style={{flexBasis: '10%'}}>
                  {donor.imageURL ? <img src={this.getDonorImage(donor.imageURL)} alt='Donor'/> : ''}
                  <p className='donor-amount'>${donor.amount}</p>
                </div>
                <div style={{flexBasis: '65%'}}>
                  <p style={{color: 'var(--text-gray)'}}>{donor.comment}</p>
                  <p style={{color: 'var(--bright-green)', marginTop: '0.35rem'}}>- {donor.name}</p>
                </div>
             </div>
           );
    });

    return(
      <div className="DonorComments">
        <h3>Donor Comments</h3>

        {donorComments}
      </div>
    );
  }
};

export default DonorComments;
