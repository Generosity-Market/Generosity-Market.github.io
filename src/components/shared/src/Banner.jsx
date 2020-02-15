import React from 'react';
import PropTypes from 'prop-types';
import MainImage from './MainImage';
// import { Glyphicon } from '@jgordy24/stalls-ui';
import '../styles/Banner.css';

const Banner = ({
    cover_image,
    heading,
    profile_mage,
    round_image,
}) =>
    (
        <div className='Header'>
            <div
                className='hero-image'
                style={{
                    backgroundImage: cover_image && `url(${cover_image})`,
                    backgroundColor: cover_image ? '' : 'var(--black-10)',
                }}
            >
                <h2>{heading && heading}</h2>
                {/* !props.cover_image && <Glyphicon icon={['far', 'image']} /> */}
            </div>

            <MainImage profile_image={profile_mage && profile_mage} round_image={round_image} />
        </div>
    );

Banner.propTypes = {
    /**
     * The background image to apply to the hero node
     */
    cover_image: PropTypes.string,
    /**
     * The text to render inside the Banner
     */
    heading: PropTypes.string,
    /**
     * The main/profile image to display in the banner
     */
    profile_image: PropTypes.string,
    /**
     * Determines if the main/profile image is rounded or squircle shape
     */
    round_image: PropTypes.bool,
};

Banner.defaultProps = {
    heading: '',
    round_image: true,
};

export default Banner;
