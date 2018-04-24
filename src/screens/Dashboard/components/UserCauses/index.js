import React, { Component } from 'react';
import './UserCauses.css';

class UserCauses extends Component {

  render() {
    return(
      <div className="your-causes">
        <h4>Your Causes</h4>
        {/* populated from causes owned by this user */}
      </div>
    );
  }
}

export default UserCauses;
