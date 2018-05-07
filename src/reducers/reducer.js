import { SET_DATA } from '../actions/actions';

import update from 'immutability-helper';
import Cookies from 'js-cookie';

const initialState = {
    causeList: [],
    selectedCause: '',
    // token: Cookies.get('token'),
    // filter: 'all',
    // user: { username: null, email: null, userId: null },
    // loggedIn: false,
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
    // case CAUSE_SELECTED:
    //   return update(state, {
    //       selectedCause: {
    //         $set: action.payload
    //       }
    // });
    default:
      return state;
  }
};










export default reducer;
