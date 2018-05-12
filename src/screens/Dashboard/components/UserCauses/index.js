import React, { Component } from 'react';
import CauseTile from '../../../../components/CauseTile/CauseTile';
import './UserCauses.css';

class UserCauses extends Component {

  render() {
    let userCauses =
    this.props.causes.map((cause, index) => {
      return(
        <CauseTile key={index} cause={cause} causeSelected={this.props.causeSelected} />
      );
    });

    return(
      <div className="UserCauses">
        <h4>Your Causes</h4>
        <div className="cause-wrapper">
          {userCauses}
        </div>
      </div>
    );
  }
};

export default UserCauses;
