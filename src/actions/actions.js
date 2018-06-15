// import Cookies from 'js-cookie';
import Services from '../services/services';

// destructuring the Services functions
const { fetchCauseList, fetchSingleCause, fetchUserData, fetchOrgData } = Services;

export const SET_DATA         = "SET_DATA",
             CAUSE_SELECTED   = "CAUSE_SELECTED",
             SET_USER         = "SET_USER",
             SET_ORGANIZATION = "SET_ORGANIZATION",
             ADD_TO_CART      = "ADD_TO_CART",
             REMOVE_FROM_CART = "REMOVE_FROM_CART",
             CLEAR_CART       = "CLEAR_CART";

const makeActionCreator = (actionType) => {
    return (payload) => {
        return { type: actionType, payload: payload };
    };
};

const makeFetchCreator = (fetchType, action, args) => {
  return (dispatch, getState) => fetchType(args).then(data => dispatch( action(data) ) );
};

export const setData        = makeActionCreator(SET_DATA),
             causeSelected  = makeActionCreator(CAUSE_SELECTED),
             setUser        = makeActionCreator(SET_USER),
             setOrg         = makeActionCreator(SET_ORGANIZATION),
             addToCart      = makeActionCreator(ADD_TO_CART),
             removeFromCart = makeActionCreator(REMOVE_FROM_CART),
             clearCart      = makeActionCreator(CLEAR_CART);


// calling the api for the entire causelist
export const getCauseList = () => makeFetchCreator(fetchCauseList, setData, null);
// getting a single cause by the id passed
export const getSingleCause = (id) => makeFetchCreator(fetchSingleCause, causeSelected, id);
// getting the logged in users information
export const getUserData = () => makeFetchCreator(fetchUserData, setUser, null);
// getting the selected organizations information
export const getOrgData = () => makeFetchCreator(fetchOrgData, setOrg, null);
