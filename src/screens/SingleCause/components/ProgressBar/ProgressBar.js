import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

  calculateBarWidth = () => {
    if (this.props.percentRaised > 5) {
      return this.props.percentRaised - 5;
    } else {
      return 1;
    }
  }

  render() {
    let barStyle = { width: `${this.calculateBarWidth()}%` };

    return(
      <div className="ProgressBar">
          <div className='percent-bar' style={barStyle}>
            <h3>{this.props.percentRaised >= 100 ? 'Goal Accomplished!!' : `Raised  ${this.props.percentRaised}%`} of ${this.props.goal}</h3>
          </div>
      </div>
    );
  }
};

export default ProgressBar;
