import React, { Component } from 'react';
import './AboutCause.css';

class AboutCause extends Component {

  render() {
    return(
      <div className="AboutCause">
        <div className="about-text">
          <h3>{this.props.title} Cause</h3>
          <p>{this.props.aboutText}</p>
        </div>

        <div className="usage-text">
          <h3>How your gift will be used</h3>
          <p>{this.props.usageText}</p>
        </div>
      </div>
    );
  }
};

export default AboutCause;
