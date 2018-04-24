import React, { Component } from 'react';
import LinkButton from '../../../../components/LinkButton';
import { Link } from 'react-router-dom';
import './UserCauses.css';

class UserCauses extends Component {

  render() {
    return(
      <div className="UserCauses">
        <h4>Your Causes</h4>
        {/* populated from causes owned by this user */}
        <div className="slider">
          <div className="cause-icon">
            <Link to='/cause/1'>
              <img src={require('../../../../Assets/Photography/jens-johnsson-78101.jpg')} alt=''/>
            </Link>
          </div>
          <div className="cause-icon">
            <Link to='/cause/2'>
              <img src={require('../../../../Assets/Photography/tim-bish-171738.jpg')} alt=''/>
            </Link>
          </div>
          <div className="cause-icon">
            <Link to='/cause/3'>
              <img src={require('../../../../Assets/Photography/madi-robson-113926.jpg')} alt=''/>
            </Link>
          </div>
        </div>

        <LinkButton classname={'create-cause'} linkText={'Create a cause'} href={'/causes/new'}/>
      </div>
    );
  }
}

export default UserCauses;
