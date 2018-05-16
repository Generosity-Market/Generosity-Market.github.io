import React, { Component } from 'react';
import MainImage from '../MainImage/MainImage';
import './Header.css';

class Header extends Component {

  getImageURL = (image) => {
    return require(`../../Assets/Photography/Mobile/${image}`);
  }

  render() {
    let imageURL = this.getImageURL(this.props.BGimage);
    let mainImageURL = this.getImageURL(this.props.mainImage);

    return(
      <div className="Header">
        <div className="hero-image" style={{ backgroundImage: `url( ${imageURL} )` }} >
          <h2>{this.props.heading}</h2>
        </div>

        <MainImage
          imageURL={mainImageURL}
          roundImage={this.props.roundImage}
        />

      </div>
    );
  }
};

export default Header;
