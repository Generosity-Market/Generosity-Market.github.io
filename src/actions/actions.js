// import Cookies from 'js-cookie';
import Services from '../services/services';
import { makeActionCreator } from './makeActionCreator';
import { makeFetchCreator } from './makeFetchCreator';

// Destructuring the Services functions
const {
  fetchCauseList,
  fetchSingleCause,
  fetchOrgData,
  submitFormData,
  submitPayment,
} = Services;

// BIG TODO Let's separate actions by type in separate files. 
// TODO Examples: user, causes, organization, donation, cart, etc...

export const ADD_CAUSE        = "ADD_CAUSE";
export const ADD_TO_CART      = "ADD_TO_CART";
export const ADD_ORGANIZATION = "ADD_ORGANIZATION";
export const CAUSE_SELECTED   = "CAUSE_SELECTED";
export const CLEAR_CART       = "CLEAR_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_DATA         = "SET_DATA";
export const SET_ORGANIZATION = "SET_ORGANIZATION";
export const UPDATE_DONATIONS = "UPDATE_DONATIONS";
export const UPDATE_TOTAL     = "UPDATE_TOTAL";


export const addCause        = makeActionCreator(ADD_CAUSE);
export const addToCart       = makeActionCreator(ADD_TO_CART);
export const addOrg          = makeActionCreator(ADD_ORGANIZATION);
export const causeSelected   = makeActionCreator(CAUSE_SELECTED);
export const clearCart       = makeActionCreator(CLEAR_CART);
export const removeFromCart  = makeActionCreator(REMOVE_FROM_CART);
export const setData         = makeActionCreator(SET_DATA);
export const setDonations    = makeActionCreator(UPDATE_DONATIONS);
export const setOrg          = makeActionCreator(SET_ORGANIZATION);
export const updateTotal     = makeActionCreator(UPDATE_TOTAL);


export const updateDonations = (data) => {
  return (dispatch, getState) => {
    const { charge, status, response: donations } = data;

    if (data.status === "Success") {
      const { causeList } = getState();

      donations.forEach(donation => {
        let causeIndex = causeList.map(cause => cause.id).indexOf(donation.causeID);
        dispatch(setDonations({causeIndex, donation}));
        dispatch(updateTotal({causeIndex, amount: donation.amount}))
      })
      // NOTE then clear the cart? Or wait for navigating away from "Thank You" component...
      // dispatch(clearCart())
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

// getting the selected organizations information
export const getOrgData = (id) => makeFetchCreator(fetchOrgData, setOrg, id);

// publishing the submitted cause page
export const submitCauseForm = (args) => makeFetchCreator(submitFormData, addCause, args);

// submits organization form
export const submitOrgForm = (args) => makeFetchCreator(submitFormData, )

// submitting a payment for total donation
export const submitDonation = (args) => makeFetchCreator(submitPayment, updateDonations, args);