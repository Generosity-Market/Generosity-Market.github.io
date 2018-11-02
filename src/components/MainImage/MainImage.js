import React from 'react';
import FontAwesome from '../FontAwesome/FontAwesome';
import './MainImage.css';

const MainImage = (props) =>
  <div className="MainImage"
    style={{
      borderRadius: props.roundImage ? '50%' : '10%',
      backgroundImage: props.mainImage && `url(${props.mainImage})`,
      backgroundColor: props.BGimage ? '' : 'var(--white)',
      display: props.mainImage ? 'block' : 'flex',
      alignContent: 'center',
      justifyContent: 'center',
  }}>
    {!props.mainImage && <FontAwesome classname="fas fa-camera"/>}
  </div>;

export default MainImage;
