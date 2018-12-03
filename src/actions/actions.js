// import Cookies from 'js-cookie';
import Services from '../services/services';

// Destructuring the Services functions
const {
  fetchCauseList,
  fetchSingleCause,
  fetchUserData,
  fetchOrgData,
  submitFormData,
  submitPayment,
} = Services;

export const SET_DATA         = "SET_DATA";
export const ADD_CAUSE        = "ADD_CAUSE";
export const CAUSE_SELECTED   = "CAUSE_SELECTED";
export const SET_USER         = "SET_USER";
export const SET_ORGANIZATION = "SET_ORGANIZATION";
export const ADD_TO_CART      = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART       = "CLEAR_CART";
export const UPDATE_DONATIONS = "UPDATE_DONATIONS";
export const UPDATE_TOTAL     = "UPDATE_TOTAL";

const makeActionCreator = (actionType) => {
    return (payload) => {
        return { type: actionType, payload: payload };
    };
};

const makeFetchCreator = (fetchType, action, args) => {
  return (dispatch, getState) => fetchType(args).then(data => dispatch( action(data) ) );
};

export const setData         = makeActionCreator(SET_DATA);
export const addCause        = makeActionCreator(ADD_CAUSE);
export const causeSelected   = makeActionCreator(CAUSE_SELECTED);
export const setUser         = makeActionCreator(SET_USER);
export const setOrg          = makeActionCreator(SET_ORGANIZATION);
export const addToCart       = makeActionCreator(ADD_TO_CART);
export const removeFromCart  = makeActionCreator(REMOVE_FROM_CART);
export const clearCart       = makeActionCreator(CLEAR_CART);
export const setDonations    = makeActionCreator(UPDATE_DONATIONS);
export const updateTotal     = makeActionCreator(UPDATE_TOTAL);

// TODO For 'register' and 'login', can we use a fetchCreator instead of the below logic?
export const register = (fields) => {
  // return (dispatch, getState) => {
  //   return services.register(fields)
  //     .then(data => {
  //       if (data.error) {
  //         dispatch(setAlert({ type: 'error', message: data.error }));
  //         return data;
  //       } else {
  //         dispatch(setAlert({ type: 'success', message: fields.username + ' successfully registered' }))
  //         dispatch(login({ email: fields.email, password: fields.password, username: fields.username }))
  //         return data;
  //       }
  //     });
  // };
};

export const login = (fields) => {
  // return (dispatch) => {
  //   return services.login(fields)
  //     .then(data => {
  //       if (!data.user) {
  //         dispatch(setAlert({ type: 'error', message: data.errors }));
  //         return data;
  //       } else {
  //         dispatch(setAlert({ type: null, message: null }))
  //         dispatch(setToken(data['auth_token']));
  //         dispatch(setUser({
  //           email: data.user.email,
  //           username: data.user.username,
  //           userId: data.user.id
  //         }))
  //         // dispatch(getGamePage(data['auth_token']));
  //         Cookies.set('token', data['auth_token'], { expires: 90 });
  //         Cookies.set('email', data.user['email'], { expires: 90 });
  //         Cookies.set('name', data.user['username'], { expires: 90 });
  //         Cookies.set('userId', data.user['id'], { expires: 90 });
  //         return data;
  //       }
  //     });
  // };
};

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

// getting the logged in users information
export const getUserData = () => makeFetchCreator(fetchUserData, setUser, null);

// getting the selected organizations information
export const getOrgData = () => makeFetchCreator(fetchOrgData, setOrg, null);

// publishing the cause page if succcessful
export const submitCauseForm = (args) => makeFetchCreator(submitFormData, addCause, args);

// submitting a payment for total donation
export const submitDonation = (args) => makeFetchCreator(submitPayment, updateDonations, args);