import React from 'react';
import PropTypes from 'prop-types';
import MainImage from '../MainImage/MainImage';
import FontAwesome from '../FontAwesome/FontAwesome';
import './Banner.css';

const Banner = (props) =>
    <div className="Header">

      <div 
        className="hero-image"
        style={{
          backgroundImage: props.BGimage && `url(${props.BGimage})`
        }}
      >
        <h2>{props.heading && props.heading}</h2>
        { !props.BGimage && <FontAwesome classname="far fa-image"/> }
      </div>

      <MainImage
        mainImage={props.mainImage && props.mainImage}
        roundImage={props.roundImage} 
      />

    </div>;

Banner.propTypes = {
	/**
   * The background image to apply to the hero node
   */
	BGimage: PropTypes.string.isRequired,
	/**
   * The text to render inside the Banner
   */
	heading: PropTypes.string.isRequired,
	/**
   * The main/profile image to display in the banner
   */
	mainImage: PropTypes.string.isRequired,
	/**
   * Determines if the main/profile image is rounded or squircle shape
   */
	roundImage: PropTypes.bool,
}

Banner.defaultProps = {
	heading: '',
	roundImage: true,
}

export default Banner;
