import React from 'react';
import FontAwesome from '../FontAwesome/FontAwesome';
import Utils from '../../utilities/utilities';
import './MainImage.css';

const MainImage = (props) =>
  <div className="MainImage"
    style={{
      borderRadius: props.roundImage ? '50%' : '10%',
      backgroundImage: props.mainImage && `url(${props.mainImage})`
  }}>
    {!props.mainImage && <FontAwesome classname="far fa-image"/>}
  </div>;

export default MainImage;
