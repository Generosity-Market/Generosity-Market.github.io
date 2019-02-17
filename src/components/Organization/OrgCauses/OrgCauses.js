import React, { Component } from 'react';
import './OrgCauses.css';

// Shared UI Components
import {
  CauseTile,
  Slider,
} from 'components/shared';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

// TODO turn this into functional component if not using state
export default class OrgCauses extends Component {

  render() {
    const { causes } = this.props;
    return (
      <div className="OrgCauses">
        {causes.length > 0 && <h3>Get involved</h3>}
        <Slider>
          {causes.map((cause, index) =>
            <CauseTileWithLazyLoad
              key={index}
              raised={58}
              cause={cause}
              index={index}
              causeSelected={this.props.causeSelected}
            />
          )}
        </Slider>
      </div>
    );
  }
};
