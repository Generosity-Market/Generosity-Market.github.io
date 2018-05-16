import React, { Component } from 'react';
import CauseTile from '../../../../components/CauseTile/CauseTile';
import Slider from '../../../../components/Slider/Slider';
import './OrgCauses.css';

export default class OrgCauses extends Component {

  imgURL = (url) => {
    return require(`../../../../Assets/Photography/Mobile/${url}`);
  }

  render() {
    const { causes, orgId } = this.props;
    const causeArr = causes.filter(cause => orgId === cause.orgId);

    let orgCauses =
    causeArr.map((cause, index) => {
      return(
        <CauseTile key={index} raised={58} cause={cause} index={index} causeSelected={this.props.causeSelected} />
      );
    });

    return(
      <div className="OrgCauses">
        <h3>Get involved</h3>
        <Slider>
          {orgCauses}
        </Slider>
      </div>
    );
  }
};
