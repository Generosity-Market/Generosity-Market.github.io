import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CauseTile from '../../../../components/CauseTile/CauseTile';
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
        <CauseTile cause={cause} index={index} causeSelected={this.props.causeSelected} />
      );
    });

    console.log(causeArr);

    return(
      <div className="OrgCauses">
        <h3>get involved</h3>
        <div className="cause-wrapper">
          {orgCauses}
        </div>
      </div>
    );
  }
};
