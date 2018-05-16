import React, { Component } from 'react';
import './MainImage.css';

export default class MainImage extends Component {
  render() {
    const { imageURL, roundImage } = this.props;
    let imageStyle = {
      borderRadius: roundImage ? '50%' : '10%',
      backgroundImage: imageURL ? `url(${imageURL})` : ''
    }

    return(
      <div className="MainImage" style={imageStyle}>
      </div>
    );
  }
};
