import React, { Component, Fragment } from 'react';
import Heading from '../../../../components/Heading/Heading';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import Slider from '../../../../components/Slider/Slider';
import Pill from '../../../../components/Pill/Pill';
import './DonorInfo.css';

import Utils from '../../../../utilities/utilities';

const {
    sortByKey,
    getFormattedDate,
    // getIconURL,
} = Utils;

const isEmpty = (obj) => {
    for (var Donations in obj) {
        if (obj.hasOwnProperty(Donations))
            return false;
    }
    return true;
}

const noCauseSelected = () => {
    return (
        <div className="empty-cause">
            No cause selected. Click the
            <span>
                <FontAwesome classname={'fas fa-info-circle'} />
            </span>
            below a cause to see it's donations.
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
                            {/* <Pill>{`$${donation.amount}`}</Pill> */}
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
