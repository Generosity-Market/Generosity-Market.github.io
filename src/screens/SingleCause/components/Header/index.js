import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  bgImage = () => {
    const imageUrl = require(`../../../../Assets/Photography/${this.props.BGimage}`);
    return imageUrl;
  }

  causeImage = () => {
    const iconURL = require(`../../../../Assets/Photography/${this.props.causeImage}`);
    return iconURL;
  }

  render() {
    console.log("Header props", this.props);
    let imageURL = this.bgImage();
    return(
      <div className="Header">
        <div className="hero-image"
             style={{ backgroundImage: `url( ${imageURL} )` }} >
          {/* this will become generated once we have user data */}
          <h2>{this.props.heading}</h2>
        </div>

        <div className="profile-image">
          {this.props.causeImage ? ' ': <i className="fas fa-user"></i>}
        </div>
      </div>
    );
  }
};

export default Header;
