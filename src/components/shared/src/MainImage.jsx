import React from 'react';
import { Glyphicon } from '@jgordy24/stalls-ui';
import '../styles/MainImage.css';

const MainImage = ({
    roundImage,
    mainImage,
    BGimage
}) =>
    (
        <div
            className="MainImage"
            style={{
                borderRadius: roundImage ? '50%' : '10%',
                backgroundImage: mainImage && `url(${mainImage})`,
                backgroundColor: BGimage ? '' : 'var(--white)',
                display: mainImage ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            {!mainImage && <Glyphicon icon="camera" />}
        </div>
    );

export default MainImage;
