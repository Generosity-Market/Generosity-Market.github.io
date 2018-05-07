// import Cookies from 'js-cookie';
import services from '../services/services';

export const SET_DATA       = "SET_DATA",
             CAUSE_SELECTED = "CAUSE_SELECTED";

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
};

export const setData = makeActionCreator(SET_DATA),
        causeSelected = makeActionCreator(CAUSE_SELECTED);


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
    return services.fetchSingleCause(id)
           .then(cause => {
             dispatch(causeSelected(cause))
           })
  }
};
