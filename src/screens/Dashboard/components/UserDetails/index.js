import React, { Component } from 'react';
import './UserDetails.css';

class UserDetails extends Component {

  render() {
    return(
      <div className="profile-details UserDetails">

        <div className="photo-upload">
          <i className="far fa-image"></i>
          <div>
            <i className="fas fa-plus"></i>
            <p>Profile</p>
          </div>
        </div>

        <div className="user-details">
          <p><span>Name: </span>Joe Gordy</p>
          <p><span>Address: </span><br/>
          123 Charity Drive,<br/>
          Atlanta, GA 30350</p>
          <p><span>Phone: </span>(334) 444-4444</p>
          <div className="edit-button">
            <i className="fas fa-plus"></i> <p>edit profile</p>
          </div>
        </div>

      </div>
    );
  }
}

export default UserDetails;
