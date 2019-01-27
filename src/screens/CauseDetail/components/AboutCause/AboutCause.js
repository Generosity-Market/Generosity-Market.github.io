import React, { Component } from 'react';
import './AboutCause.css';

// Shared UI Components
import {
  TextSection,
} from 'components';

// TODO convert to functional component if not using state
class AboutCause extends Component {

  render() {
    return (
      <div className="AboutCause">

        <TextSection
          heading={`About the ${this.props.title} Cause`}
          text={this.props.aboutText} />

        <TextSection
          heading={`How your gift will be used`}
          text={this.props.usageText} />

      </div>
    );
  }
};

export default AboutCause;
