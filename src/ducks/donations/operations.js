import {
    setDonations,
    updateTotal,
} from './actions';

import Services from '../../services/services';
import { makeFetchCreator } from '../../actions/makeFetchCreator';

const {
    submitPayment,
} = Services;

const updateDonations = (data) => {
    return (dispatch, getState) => {
        const { charge, status, response: donations } = data;

        if (data.status === "Success") {
            const { causeList } = getState();

            donations.forEach(donation => {
                let causeIndex = causeList.map(cause => cause.id).indexOf(donation.causeID);
                dispatch(setDonations({ causeIndex, donation }));
                dispatch(updateTotal({ causeIndex, amount: donation.amount }))
            })
            // NOTE then clear the cart? Or wait for navigating away from "Thank You" component...
            // dispatch(clearCart())
            return { status: charge.outcome.type };
        } else {
            return { status };
        }
    }
};

// submitting a payment for total donation
export const submitDonation = (args) => makeFetchCreator(submitPayment, updateDonations, args);