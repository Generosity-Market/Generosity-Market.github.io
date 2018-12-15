import React, { Component } from 'react';
import CauseTile from '../../../../components/CauseTile/CauseTile';
import Slider from '../../../../components/Slider/Slider';
import Heading from '../../../../components/Heading/Heading';
import './UserCauses.css';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

// TODO convert this to functional component if we arent using state...
class UserCauses extends Component {

  render() {
    let userCauses =
    this.props.causes.map(cause => {
      return(
        <CauseTileWithLazyLoad key={cause.id} raised={36} cause={cause} causeSelected={this.props.causeSelected} />
      );
    });

    return(
      <div className="UserCauses">
        <Heading text={'Your Causes'} />
        <Slider>
          {userCauses}
        </Slider>
      </div>
    );
  }
};

export default UserCauses;
