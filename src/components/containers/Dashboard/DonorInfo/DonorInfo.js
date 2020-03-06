import React, { Fragment, useState } from 'react';
import './DonorInfo.css';

// Shared UI Components
import { Glyphicon, Pill } from '@jgordy24/stalls-ui';
import {
    DownloadCSV,
    Heading,
    Slider,
} from 'components/shared';

import {
    getFormattedDate,
    sortByKey,
    // getIconURL,
} from 'utilities';

const isEmpty = (obj) => {
    for (var Donations in obj) {
        if (obj.hasOwnProperty(Donations))
            return false;
    }
    return true;
};

const infoButton = (<Glyphicon icon={'info-circle'} />);

const noCauseSelected = () => {
    return (
        <div className="empty-cause">
            No cause selected. Click the {infoButton} button below a cause to see corresponding donations.
        </div>
    );
};

const getSortKey = (sort) => {
    switch (sort) {
        case 'By Date':
            return 'updatedAt';
        case 'By Amount':
            return 'amount';
        case 'By Email':
            return 'email';
        default:
            return '';
    }
};

const formatDonorInfoForDownload = (info) => {
    return info.map(item => {
        const { id, email, amount, updatedAt } = item;
        return {
            'Transaction id': id,
            Email: email,
            Amount: amount,
            Date: getFormattedDate(updatedAt),
        };
    });
};

const sorts = [
    'By Date',
    'By Amount',
    // 'Lowest First',
    'By Email',
];

export const DonorInfo = ({ cause }) => {
    const [sort, setSort] = useState('');

    const renderSorts = (sort) => {
        return (
            <Slider>
                {sorts.map(text => {
                    return (
                        <Pill
                            key={text + text}
                            bsStyle='success'
                            active={sort === text}
                            onClick={handleUpdateState}
                            label={text}
                        />
                    );
                })}
            </Slider>
        );
    };

    const handleUpdateState = (event) => {
        event.persist();
        setSort(event.target.textContent);
    };

    const renderDonations = (sortedDonations) => {
        if (sortedDonations.length <= 0) {
            return (
                <p style={{ color: 'var(--text-gray', textAlign: 'center', marginTop: '1.5rem' }}>
                    This cause currently has no donations
                </p>
            );
        }

        return (
            <Fragment>
                {sortedDonations.map((donation, index) => {
                    return (
                        <div
                            key={getFormattedDate(donation.updatedAt) + donation.amount}
                            className="donation-card"
                            style={{ backgroundColor: `${index % 2 === 0 ? 'transparent' : 'var(--black-10)'}` }}
                        >
                            <p>${donation.amount}</p>
                            <p>{donation.email}</p>
                            <p>{getFormattedDate(donation.updatedAt)}</p>
                        </div>
                    );
                })}
            </Fragment>
        );
    };

    const causeIsEmpty = isEmpty(cause);
    const sortKey = getSortKey(sort);

    let sortedArray;
    if (!causeIsEmpty) {
        sortedArray = sortByKey(cause.Donations, sortKey);
    }

    return (
        <div className="DonorInfo">
            <Heading text={`Donations ${causeIsEmpty ? ' ' : `for ${cause.name}`}`} />

            {causeIsEmpty && noCauseSelected()}

            {!causeIsEmpty &&
                <div className="wrapper">
                    <DownloadCSV
                        buttonText={'Download Donor info'}
                        className="donor-download"
                        csvData={formatDonorInfoForDownload(sortedArray)}
                        filename={cause.name}
                    />

                    {renderSorts(sort)}

                    <div
                        className="donation-card"
                        style={{ backgroundColor: 'var(--black-10)', height: '2rem' }}
                    >
                        <p style={{ flex: '0 0 25%', color: 'var(--blackish)' }}>Amount</p>
                        <p style={{ flex: '0 0 55%', color: 'var(--blackish)' }}>Email</p>
                        <p style={{ flex: '0 0 20%', color: 'var(--blackish)' }}>Date</p>
                    </div>

                    {renderDonations(sortedArray)}
                </div>
            }

        </div>
    );
};

export default DonorInfo;
