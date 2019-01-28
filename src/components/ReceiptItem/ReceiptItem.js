import React from 'react';
import Utils from 'utilities/utilities';
import { Link } from 'react-router-dom';
import './ReceiptItem.css';

// Shared UI Components
import {
    Slider,
    Pill,
} from 'components';

const ReceiptItem = ({
    name,
    id,
    mainImage,
    Donations,
}) => {
    return (
        <div className='ReceiptItem'>
            <img
                src={mainImage}
                alt={`${name}`}
            />
            <div className="Info">
                <Link to={`/cause/${id}`}>{name}</Link>
                <Slider>
                    {Donations.map(donation => (
                        <Pill
                            uiContext={'active'}
                            key={donation.amount}
                        >
                            ${donation.amount}
                        </Pill>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ReceiptItem;