import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

  calculateBarWidth = (percentRaised) => {
    if (percentRaised > 5) {
      return percentRaised - 5;
    } else {
      return 1;
    }
  }

  render() {
    const { goal = 0, totalRaised = 0 } = this.props;
    const percentRaised = (totalRaised / goal * 100).toFixed(0);
    let barStyle = { width: `${this.calculateBarWidth(percentRaised)}%` };
  

    return(
      <div className="ProgressBar">
          <div className='percent-bar' style={barStyle}>
          <h3>{percentRaised >= 100 ? 'Goal Accomplished!!' : `Raised  $${totalRaised} of $${goal} (${percentRaised}%)`} </h3>
          </div>
      </div>
    );
  }
};

export default ProgressBar;
