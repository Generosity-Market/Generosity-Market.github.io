import Cookies from 'js-cookie';

import services from '../services/services';

export const SET_DATA = "SET_DATA";

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
};

export const setData = makeActionCreator(SET_DATA);


// calling the api for the entire gamelist
export const getCauseList = () => {
  return(dispatch, getState) => {
    return services.fetchCauseList()
           .then(causes => {
             dispatch(setData(causes))
           })
  }
}
