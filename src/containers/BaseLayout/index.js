import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {

  render() {
    return(
      <div className="BaseLayout">
        <Link to="/">Home</Link>
        <Link to='/splash'>Splash</Link>

        {this.props.children}
        
      </div>
    )
  }
};

export default BaseLayout;
