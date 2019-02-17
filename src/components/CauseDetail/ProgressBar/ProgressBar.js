import React, { Component } from 'react';
import './ProgressBar.css';


// TODO convert to functional component if not using state
class ProgressBar extends Component {

  calculateBarWidth = (percentRaised) => {
    if (percentRaised > 5) {
      return percentRaised - 7;
    } else {
      return 1;
    }
  }

  render() {
    const { goal, totalRaised } = this.props;
    const percentRaised = (totalRaised / goal * 100).toFixed(0);
    let barStyle = { width: `${this.calculateBarWidth(percentRaised)}%` };


    return (
      <div className="ProgressBar">
        <div className='percent-bar' style={barStyle}>
          <h3>{percentRaised >= 100 ? 'Goal Accomplished!!' : `Raised  $${totalRaised || 0} of $${goal || 0} (${percentRaised}%)`} </h3>
        </div>
      </div>
    );
  }
};

export default ProgressBar;
