import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import './UserDetails.css';

class UserDetails extends Component {

  render() {
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
          <p><span>Name: </span>{this.props.name}</p>

          <p><span>Address: </span><br/>
          {this.props.address.street},<br/>
          {this.props.address.city}, {this.props.address.state} {this.props.address.zipcode}</p>

          <p><span>Phone: </span>{this.props.phone}</p>

          <div className="edit-button">
            <FontAwesome classname={"fas fa-plus"} /> <p>edit profile</p>
          </div>
        </div>

      </div>
    );
  }
}

export default UserDetails;
