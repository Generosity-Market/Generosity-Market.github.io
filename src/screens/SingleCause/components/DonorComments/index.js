import React, { Component } from 'react';
import './DonorComments.css';

class DonorComments extends Component {

  render() {
    let donorData = [{
      name: 'Sally Givesalot',
      comment: 'I love this idea. Happy Birthday!',
      amount: 100,
      imageURL: '../../../../Assets/Photography/profile.jpg'
    }, {
      name: 'Bob Surrent',
      comment: 'Happy Birthday Fiona!',
      amount: 25,
      imageURL: '../../../../Assets/Photography/profile3.jpg'
    }, {
      name: 'Jim Giver',
      comment: 'See you tonight, Happy Birthday',
      amount: 50,
      imageURL: '../../../../Assets/Photography/profile2.jpg'
    }];

    let donorComments = donorData.map((donor, index) => {
      return (
             <div key={index} className="comment-card">
                <div></div>
                <div></div>
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
