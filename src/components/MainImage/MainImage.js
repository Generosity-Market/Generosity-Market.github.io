import React from 'react';
import './MainImage.css';

const MainImage = (props) => {
  const { imageURL, roundImage } = props;
  let imageStyle = {
    borderRadius: roundImage ? '50%' : '10%',
    backgroundImage: imageURL ? `url(${imageURL})` : ''
  }

  return <div className="MainImage" style={imageStyle}></div>
};

export default MainImage;
