import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import './UserDetails.css';

// TODO turn this into function component if we aren't using state
class UserDetails extends Component {

  render() {
    const { name, address, phone } = this.props;
    return(
      <div className="profile-details UserDetails">

        <div className="photo-upload">
          <FontAwesome classname={"far fa-image"} />
          <div>
            <FontAwesome classname={"fas fa-plus"} />
            <p>Profile</p>
          </div>
        </div>

        <div className="user-details">
          <p><span>Name: </span>{name}</p>

          <p><span>Address: </span><br/>
          {address.street},<br/>
          {address.city}, {address.state} {address.zipcode}</p>

          <p><span>Phone: </span>{phone}</p>

          <div className="edit-button">
            <FontAwesome classname={"fas fa-plus"} /> <p>edit profile</p>
          </div>
        </div>

      </div>
    );
  }
}

export default UserDetails;
