import React from 'react';
import PropTypes from 'prop-types';
import MainImage from '../MainImage/MainImage';
// import FontAwesome from '../FontAwesome/FontAwesome';
import './Banner.css';

const Banner = ({
    BGimage,
    heading,
    mainImage,
    roundImage,
}) => (
        <div className='Header'>
            <div
                className='hero-image'
                style={{
                    backgroundImage: BGimage && `url(${BGimage})`,
                    backgroundColor: BGimage ? '' : 'var(--black-10)',
                }}
            >
                <h2>{heading && heading}</h2>
                {/* !props.BGimage && <FontAwesome classname="far fa-image"/> */}
            </div>

            <MainImage mainImage={mainImage && mainImage} roundImage={roundImage} />
        </div>
    );

Banner.propTypes = {
    /**
     * The background image to apply to the hero node
     */
    BGimage: PropTypes.string,
    /**
     * The text to render inside the Banner
     */
    heading: PropTypes.string,
    /**
     * The main/profile image to display in the banner
     */
    mainImage: PropTypes.string,
    /**
     * Determines if the main/profile image is rounded or squircle shape
     */
    roundImage: PropTypes.bool,
};

Banner.defaultProps = {
    heading: '',
    roundImage: true,
};

export default Banner;
