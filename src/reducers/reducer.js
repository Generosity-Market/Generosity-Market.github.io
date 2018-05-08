import { SET_USER, SET_DATA, CAUSE_SELECTED } from '../actions/actions';

import update from 'immutability-helper';
// import Cookies from 'js-cookie';

const initialState = {
    causeList: [],
    selectedCause: '',
    user: '',
    // token: Cookies.get('token'),
    // filter: 'all',
    // alert: { type: null, message: null }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DATA:
      return update(state, {
          causeList: {
              $set: action.payload
          }
    });
    case CAUSE_SELECTED:
      return update(state, {
          selectedCause: {
            $set: action.payload
          }
    });
    case SET_USER:
    return update(state, {
      user: {
        $set: action.payload
      }
    });
    default:
      return state;
  }
};










export default reducer;
