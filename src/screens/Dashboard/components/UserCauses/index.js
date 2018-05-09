import React, { Component } from 'react';
import LinkButton from '../../../../components/LinkButton';
import { Link } from 'react-router-dom';
import './UserCauses.css';

class UserCauses extends Component {

  // TODO remove hard coded links once data is available
  render() {
    return(
      <div className="UserCauses">
        <h4>Your Causes</h4>

        <div className="slider">
          <div className="cause-icon">
            <Link to='/cause/1'>
              <img src={require('../../../../Assets/Photography/Mobile/jens-johnsson-78101.jpg')} alt=''/>
            </Link>
          </div>
          <div className="cause-icon">
            <Link to='/cause/2'>
              <img src={require('../../../../Assets/Photography/Mobile/tim-bish-171738.jpg')} alt=''/>
            </Link>
          </div>
          <div className="cause-icon">
            <Link to='/cause/0'>
              <img src={require('../../../../Assets/Photography/Mobile/madi-robson-113926.jpg')} alt=''/>
            </Link>
          </div>
        </div>

        <LinkButton classname={'create-cause'} linkText={'Create a cause'} href={'/causes/new'}/>
      </div>
    );
  }
}

export default UserCauses;
