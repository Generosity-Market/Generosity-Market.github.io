// import Cookies from 'js-cookie';
import Services from '../services/services';

export const SET_DATA         = "SET_DATA",
             CAUSE_SELECTED   = "CAUSE_SELECTED",
             SET_USER         = "SET_USER",
             SET_ORGANIZATION = "SET_ORGANIZATION";

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
};

export const setData   = makeActionCreator(SET_DATA),
        causeSelected  = makeActionCreator(CAUSE_SELECTED),
             setUser   = makeActionCreator(SET_USER),
             setOrg = makeActionCreator(SET_ORGANIZATION);


// calling the api for the entire gamelist
export const getCauseList = () => {
  return(dispatch, getState) => {
    return Services.fetchCauseList()
           .then(causes => {
             dispatch(setData(causes))
           })
  }
};

export const getSingleCause = (id) => {
  return(dispatch, getState) => {
    return Services.fetchSingleCause()
           .then(list => {
             let cause = list.filter(index => index.id === Number(id));
             dispatch(causeSelected(cause[0]))
           })
  }
};

export const getUserData = () => {
  return(dispatch, getState) => {
    return Services.fetchUserData()
           .then(user => {
             dispatch(setUser(user))
           })
  }
}

export const getOrgData = () => {
  return(dispatch, getState) => {
    return Services.fetchOrgData()
           .then(org => {
             dispatch(setOrg(org))
           })
  }
}
