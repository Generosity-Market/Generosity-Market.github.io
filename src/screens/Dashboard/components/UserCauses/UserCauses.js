import React, { Component, Fragment } from 'react';
import './UserCauses.css';

// SHared UI Components
import CauseTile from 'components/CauseTile/CauseTile';
import Slider from 'components/Slider/Slider';
import Heading from 'components/Heading/Heading';
import FontAwesome from 'components/FontAwesome/FontAwesome';

// Import HOC to see if component is in viewport
import handleViewport from 'react-in-viewport';

const CauseTileWithLazyLoad = handleViewport(CauseTile);

// TODO convert this to functional component if we arent using state...
class UserCauses extends Component {

  getUserCauses = (causes) => {
    const {
      causeSelected,
      selectCauseToHighlight,
      highlightedCause
    } = this.props;

    return causes.map(cause => {
      return (
        <Fragment key={cause.id}>
          <CauseTileWithLazyLoad
            key={cause.id}
            raised={Number(cause.totalRaised)}
            cause={cause}
            causeSelected={causeSelected}
          >
            <p
              className="see-donors"
              onClick={() => selectCauseToHighlight(cause.id)}
            >
              <FontAwesome
                classname={'fas fa-info-circle'}
                style={{ color: `${highlightedCause === cause.id ? 'var(--bright-green)' : 'var(--text-gray)'}` }}
              />
            </p>
          </CauseTileWithLazyLoad>
        </Fragment>
      );
    });
  }

  renderNoCauses = () => {
    return (
      <div className="no-causes">
        Loading your Causes...
      </div>
    );
  }

  render() {
    const {
      causes,
    } = this.props;

    return (
      <div className="UserCauses">
        <Heading text={'Your Causes'} />
        <Slider>
          {!causes && this.renderNoCauses()}
          {causes && causes.length && this.getUserCauses(causes)}
        </Slider>
      </div>
    );
  }
};

export default UserCauses;
