import React, { Component, Fragment } from 'react';
import './DonorInfo.css';

// Shared UI Components
import {
    DownloadCSV,
    FontAwesome,
    Heading,
    Pill,
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

const infoButton = (
    <span>
        <FontAwesome classname={'fas fa-info-circle'} />
    </span>
);

const noCauseSelected = () => {
    return (
        <div className="empty-cause">
            No cause selected. Click the {infoButton} button below a cause to see it's donations.
        </div>
    )
}

const getSortKey = (sort) => {
    switch (sort) {
        case 'By Date':
            return 'updatedAt'
        case 'By Amount':
            return 'amount';
        case "By Email":
            return 'email';
        default:
            return '';
    }
}

const formatDonorInfoForDownload = (info) => {
    return info.map(item => {
        const { id, email, amount, updatedAt } = item;
        return {
            "Transaction id": id,
            Email: email,
            Amount: amount,
            Date: getFormattedDate(updatedAt),
        }
    })
}


export default class DonorInfo extends Component {
    constructor(props) {
        super(props)

        this.sorts = [
            'By Date',
            'By Amount',
            // 'Lowest First',
            'By Email',
        ];

        this.state = {
            sort: '',
        }
    }

    renderSorts = (sort) => {
        return (
            <Slider>
                {this.sorts.map(text => {
                    return (
                        <Pill
                            key={text + text}
                            uiContext={sort === text ? 'active' : 'success'}
                            onClick={this.handleUpdateState('sort')}
                        >
                            {text}
                        </Pill>
                    )
                })}
            </Slider>
        );
    };

    handleUpdateState = (field) => {
        return (event) => {
            this.setState({ [field]: event.target.textContent })
        }
    };

    renderDonations = (sortedDonations) => {
        if (sortedDonations.length <= 0) {
            return (
                <p style={{ color: 'var(--text-gray', textAlign: 'center', marginTop: '1.5rem' }}>
                    This cause currently has no donations
                </p>
            )
        };

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
                    )
                })}
            </Fragment>
        )
    }

    render() {
        const { cause } = this.props;
        const { sort } = this.state;

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

                        {this.renderSorts(sort)}

                        <div
                            className="donation-card"
                            style={{ backgroundColor: 'var(--black-10)', height: '2rem' }}
                        >
                            <p style={{ flex: '0 0 25%', color: 'var(--blackish)' }}>Amount</p>
                            <p style={{ flex: '0 0 55%', color: 'var(--blackish)' }}>Email</p>
                            <p style={{ flex: '0 0 20%', color: 'var(--blackish)' }}>Date</p>
                        </div>

                        {this.renderDonations(sortedArray)}
                    </div>}

            </div>
        )
    }

}
