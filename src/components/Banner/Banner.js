import React from 'react';
import MainImage from '../MainImage/MainImage';
import './Banner.css';

const Banner = (props) => {
  const getImageURL = image => require(`../../Assets/Photography/Mobile/${image}`);
  let imageURL = getImageURL(props.BGimage);
  let mainImageURL = getImageURL(props.mainImage);

  return(
    <div className="Header">
      <div className="hero-image" style={{backgroundImage: `url(${imageURL})`}}>
        <h2>{props.heading}</h2>
      </div>

      <MainImage
        imageURL={mainImageURL}
        roundImage={props.roundImage} />
    </div>
  );
};

export default Banner;
