import {
    SET_USER,
    SET_DATA,
    CAUSE_SELECTED,
    SET_ORGANIZATION,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    ADD_CAUSE,
    UPDATE_DONATIONS,
} from '../actions/actions';
import update from 'immutability-helper';
// import Cookies from 'js-cookie';

const initialState = {
    causeList: [],
    selectedCause: '',
    user: '',
    orgList: [],
    selectedOrg: '',
    cart: []
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
        case ADD_CAUSE:
            return update(state, {
                causeList: {
                    $push: [action.payload]
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
        case SET_ORGANIZATION:
            return update(state, {
                selectedOrg: {
                    $set: action.payload
                }
            });
        case ADD_TO_CART:
            return update(state, {
                cart: {
                    $push: [action.payload]
                }
            });
        case REMOVE_FROM_CART:
            return update(state, {
                cart: {
                    $set: action.payload
                }
            });
        case CLEAR_CART:
            return update(state, {
                cart: {
                    $set: []
                }
            });
        case UPDATE_DONATIONS:
            // New state array instead of mutating state
            let causeList = state.causeList;

            // Loop over action.payload to get the index based on causeID, update new causeList array
            action.payload.forEach(index => {
                let causeIndex = causeList.map(cause => cause.id).indexOf(index.causeID);
                console.log(causeIndex);
                causeList[causeIndex].Donations.push(index);
            });

            // Update the state with the whole causeList array
            return update(state, {
                causeList: {
                    $set: causeList
                }
            });
        default:
            return state;
    }
};

export default reducer;
