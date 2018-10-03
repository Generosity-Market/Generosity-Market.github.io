import React, { Component } from 'react';
import CauseTile from '../../../../components/CauseTile/CauseTile';
import Slider from '../../../../components/Slider/Slider';
import './OrgCauses.css';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

export default class OrgCauses extends Component {

  render() {
    const { causes } = this.props;
    return(
      <div className="OrgCauses">
        {causes.length > 0 && <h3>Get involved</h3>}
        <Slider>
          {causes.map((cause, index) =>
              <CauseTileWithLazyLoad key={index} raised={58} cause={cause} index={index} causeSelected={this.props.causeSelected} /> ) }
        </Slider>
      </div>
    );
  }
};
