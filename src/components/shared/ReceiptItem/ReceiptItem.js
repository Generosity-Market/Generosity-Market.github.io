import React from 'react';
// import Utils from 'utilities/utilities';
import { Link } from 'react-router-dom';
import './ReceiptItem.css';

// Shared UI Components
import {
    Slider,
    Tile,
} from 'components/shared';

const ReceiptItem = ({
    cause,
    selectCause,
}) => {

    const {
        Donations,
        id,
        mainImage,
        name,
    } = cause;

    return (
        <div className='ReceiptItem'>
            <div className="image-wrapper">
                <img
                    src={mainImage}
                    alt={`${name}`}
                />
            </div>
            <div className="Info">
                <Link to={`/cause/${id}`} onClick={() => selectCause(cause)}>{name}</Link>
                <Slider>
                    {Donations.map(donation => (
                        <Tile
                            uiContext={'active'}
                            key={donation.amount}
                        >
                            ${donation.amount}
                        </Tile>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default ReceiptItem;