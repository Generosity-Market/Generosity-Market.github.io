import {
    addCause,
    causeSelected,
    setData,
    setDonations,
    updateTotal,
} from './actions';

import { makeFetchCreator } from 'actions/makeFetchCreator';

import {
    fetchCauseList,
    fetchSingleCause,
    submitCauseFormData,
    submitPayment,
} from 'services';

export {
    addCause,
    causeSelected
} from './actions';

const updateDonations = ({ charge, status, donations }) => {
    return (dispatch, getState) => {
        if (status === 'Success') {
            const { causeList } = getState().cause;

            donations.forEach(donation => {
                let causeIndex = causeList.map(cause => cause.id).indexOf(donation.cause_id);
                dispatch(setDonations({ causeIndex, donation }));
                dispatch(updateTotal({ causeIndex, amount: donation.amount }));
            });
            return { status: charge.outcome.type };
        } else {
            return { status };
        }
    };
};

export const submitDonation = (args) => {
    return (dispatch) => {
        return submitPayment({
            body: JSON.stringify(args),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                dispatch(updateDonations(response));
                return { status: response.status };
            });
    };
};

// calling the api for the entire causelist
export const getCauseList = () => makeFetchCreator(fetchCauseList, setData, null);

// getting a single cause by the id passed
export const getSingleCause = (id) => makeFetchCreator(fetchSingleCause, causeSelected, id);

// publishing the submitted cause page
export const submitCauseForm = (args) => makeFetchCreator(submitCauseFormData, addCause, args);
