import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import './AboutCause.css';

class AboutCause extends Component {

  render() {
    return(
      <div className="AboutCause">
        <div className="about-text">
          <Heading text={`About the ${this.props.title} Cause`}/>
          <p>{this.props.aboutText}</p>
        </div>

        <div className="usage-text">
          <Heading text={`How your gift will be used`}/>
          <p>{this.props.usageText}</p>
        </div>
      </div>
    );
  }
};

export default AboutCause;
