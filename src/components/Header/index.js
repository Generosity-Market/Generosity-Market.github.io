import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  bgImage = () => {
    const imageUrl = require(`../../Assets/Photography/${this.props.BGimage}`);
    return imageUrl;
  }

  mainImage = () => {
      const mainImageURL = require(`../../Assets/Photography/${this.props.mainImage}`);
      return mainImageURL;
  }

  render() {
    let imageURL = this.bgImage();
    let mainImageURL = this.mainImage();
    return(
      <div className="Header">
        <div className="hero-image" style={{ backgroundImage: `url( ${imageURL} )` }} >
          {/* TODO This will become generated once we have user data */}
          <h2>{this.props.heading}</h2>
        </div>

        <div className="profile-image">
          {this.props.mainImage ? <img src={mainImageURL} alt='Profile'/> : <i className="fas fa-user"></i>}
        </div>
      </div>
    );
  }
};

export default Header;
