// import Cookies from 'js-cookie';
import services from '../services/services';

export const SET_DATA       = "SET_DATA",
             CAUSE_SELECTED = "CAUSE_SELECTED",
             SET_USER       = "SET_USER";

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
};

export const setData  = makeActionCreator(SET_DATA),
        causeSelected = makeActionCreator(CAUSE_SELECTED),
             setUser  = makeActionCreator(SET_USER);


// calling the api for the entire gamelist
export const getCauseList = () => {
  return(dispatch, getState) => {
    return services.fetchCauseList()
           .then(causes => {
             dispatch(setData(causes))
           })
  }
};

export const getSingleCause = (id) => {
  return(dispatch, getState) => {
    return services.fetchSingleCause()
           .then(list => {
             let cause = list.filter(index => index.id === Number(id));
             dispatch(causeSelected(cause[0]))
           })
  }
};

export const getUserData = () => {
  return(dispatch, getState) => {
    return services.fetchUserData()
           .then(user => {
             dispatch(setUser(user))
           })
  }
}
