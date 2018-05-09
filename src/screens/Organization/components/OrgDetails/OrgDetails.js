import React, { Component } from 'react';
import './OrgDetails.css';

export default class OrgDetails extends Component {

  render() {
    console.log(this.props);
    let { heading, mission, email } = this.props;
    return(
      <div className="OrgDetails">

        <div className="our-motto">
          <h3>Our Motto</h3>
          <p>{heading}</p>
        </div>

        <div className="our-mission">
          <h3>Our Mission</h3>
          <p>{mission}</p>
        </div>

        <div className="contact-us">
          <h3>For more info</h3>
          <a href={`mailTo:${email}`}>Contact us at: {email}</a>
        </div>

      </div>
    );
  }
};
