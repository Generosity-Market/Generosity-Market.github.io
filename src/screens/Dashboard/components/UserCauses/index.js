import React, { Component } from 'react';
import CauseTile from '../../../../components/CauseTile/CauseTile';
import Slider from '../../../../components/Slider/Slider';
import './UserCauses.css';

class UserCauses extends Component {

  render() {
    let userCauses =
    this.props.causes.map((cause, index) => {
      return(
        <CauseTile key={index} raised={36} cause={cause} causeSelected={this.props.causeSelected} />
      );
    });

    return(
      <div className="UserCauses">
        <h4>Your Causes</h4>
        <Slider>
          {userCauses}
        </Slider>
      </div>
    );
  }
};

export default UserCauses;
