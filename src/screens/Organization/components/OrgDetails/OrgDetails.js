import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import './OrgDetails.css';

export default class OrgDetails extends Component {

  render() {
    const { heading, mission, email } = this.props;
    return(
      <div className="OrgDetails">

        <div className="our-motto">
          <Heading text={'Our Motto'} />
          <p>{heading}</p>
        </div>

        <div className="our-mission">
          <Heading text={'Our Mission'} />
          <p>{mission}</p>
        </div>

        <div className="contact-us">
          <Heading text={'For More Info'} />
          <a href={`mailTo:${email}`}>Contact us at: {email}</a>
        </div>

      </div>
    );
  }
};
