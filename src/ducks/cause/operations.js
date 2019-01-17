import {
    addCause,
    causeSelected,
    setData,
    setDonations,
    updateTotal,
} from './actions';

import Services from '../../services/services';
import { makeFetchCreator } from '../../actions/makeFetchCreator';

const {
    fetchCauseList,
    fetchSingleCause,
    submitFormData,
    submitPayment,
} = Services;

export {
    addCause,
    causeSelected
} from './actions';

const updateDonations = (data) => {
    return (dispatch, getState) => {
        const { charge, status, response: donations } = data;

        if (data.status === "Success") {
            const { causeList } = getState().cause;

            donations.forEach(donation => {
                let causeIndex = causeList.map(cause => cause.id).indexOf(donation.causeID);
                dispatch(setDonations({ causeIndex, donation }));
                dispatch(updateTotal({ causeIndex, amount: donation.amount }))
            })
            return { status: charge.outcome.type };
        } else {
            return { status };
        }
    }
};

// calling the api for the entire causelist
export const getCauseList = () => makeFetchCreator(fetchCauseList, setData, null);

// getting a single cause by the id passed
export const getSingleCause = (id) => makeFetchCreator(fetchSingleCause, causeSelected, id);

// publishing the submitted cause page
export const submitCauseForm = (args) => makeFetchCreator(submitFormData, addCause, args);

// submitting a payment for total donation
export const submitDonation = (args) => makeFetchCreator(submitPayment, updateDonations, args);