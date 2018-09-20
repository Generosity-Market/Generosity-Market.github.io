import React from 'react';
import MainImage from '../MainImage/MainImage';
import FontAwesome from '../FontAwesome/FontAwesome';
import Utils from '../../utilities/utilities';
import './Banner.css';

const Banner = (props) =>
    <div className="Header">

      <div className="hero-image"
           style={{
             backgroundImage: props.BGimage && `url(${props.BGimage})`
           }}>
        <h2>{props.heading && props.heading}</h2>
        {!props.BGimage && <FontAwesome classname="far fa-image"/>}
      </div>

      <MainImage
        mainImage={props.mainImage && props.mainImage}
        roundImage={props.roundImage} />

    </div>

export default Banner;
