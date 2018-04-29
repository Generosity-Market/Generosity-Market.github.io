import React, { Component } from 'react';
import './DonorComments.css';

class DonorComments extends Component {

  render() {
    let donorData = [{
      name: 'Sally Givesalot',
      comment: 'I love this idea. Happy Birthday!',
      amount: 100,
      imageURL: 'profile.jpg'
    }, {
      name: 'Bob Surrent',
      comment: 'Happy Birthday Fiona!',
      amount: 25,
      imageURL: 'profile3.jpg'
    }, {
      name: 'Jim Giver',
      comment: 'See you tonight, Happy Birthday',
      amount: 50,
      imageURL: 'profile2.jpg'
    }];

    let donorComments = donorData.map((donor, index) => {
      const donorImage = require(`../../../../Assets/Photography/${donor.imageURL}`);
      return (
             <div key={index} className="comment-card">
                <div style={{flexBasis: '10%'}}>
                  <img src={donorImage} alt='Donor'/>
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
