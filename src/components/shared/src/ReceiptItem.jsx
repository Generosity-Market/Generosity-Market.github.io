import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ReceiptItem.css';

// Shared UI Components
import { Tile } from '@jgordy24/stalls-ui';
import { Slider } from 'components/shared';

const ReceiptItem = ({
    cause,
    selectCause,
}) => {

    const {
        Donations,
        id,
        profile_image,
        name,
    } = cause;

    return (
        <div className='ReceiptItem'>
            <div className="image-wrapper">
                <img
                    src={profile_image}
                    alt={`${name}`}
                />
            </div>
            <div className="Info">
                <Link to={`/cause/${id}`} onClick={() => selectCause(cause)}>{name}</Link>
                <Slider>
                    {Donations.map(donation => (
                        <Tile
                            bsStyle='active'
                            key={donation.amount}
                        >
                            ${donation.amount}
                        </Tile>
                    ))}
                </Slider>
            </div>
        </div >
    );
};

export default ReceiptItem;