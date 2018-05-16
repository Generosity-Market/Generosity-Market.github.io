import React from 'react';
import './MainImage.css';

const MainImage = (props) =>
  <div className="MainImage"
    style={{
      borderRadius: props.roundImage ? '50%' : '10%',
      backgroundImage: props.imageURL ? `url(${props.imageURL})` : ''}}>
  </div>

export default MainImage;
