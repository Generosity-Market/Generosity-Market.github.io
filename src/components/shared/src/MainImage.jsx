import React from 'react';
import { Glyphicon } from '@jgordy24/stalls-ui';
import '../styles/MainImage.css';

const MainImage = ({
    round_image,
    profile_image,
    BGimage
}) =>
    (
        <div
            className="MainImage"
            style={{
                borderRadius: round_image ? '50%' : '10%',
                backgroundImage: profile_image && `url(${profile_image})`,
                backgroundColor: BGimage ? '' : 'var(--white)',
                display: profile_image ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            {!profile_image && <Glyphicon icon="camera" />}
        </div>
    );

export default MainImage;
