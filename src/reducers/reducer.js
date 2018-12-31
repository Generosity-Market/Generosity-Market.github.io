import update from 'immutability-helper';
import initialState from './initialState';

import {
    SET_USER,
    SET_TOKEN,
    SET_DATA,
    CAUSE_SELECTED,
    // ADD_ORGANIZATION,
    SET_ORGANIZATION,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    ADD_CAUSE,
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from '../actions/actions';

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_DATA:
            return update(state, {
                causeList: {
                    $set: payload
                }
            });
        case ADD_CAUSE:
            return update(state, {
                causeList: {
                    $push: [payload]
                }
            });
        case CAUSE_SELECTED:
            return update(state, {
                selectedCause: {
                    $set: payload
                }
            });
        case SET_USER:
            return update(state, {
                user: {
                    $set: payload
                }
            });
        case SET_TOKEN:
            return update(state, {
                token: {
                    $set: action.payload
                }
            });
        case SET_ORGANIZATION:
            return update(state, {
                selectedOrg: {
                    $set: payload
                }
            });
        case ADD_TO_CART:
            return update(state, {
                cart: {
                    $push: [payload]
                }
            });
        case REMOVE_FROM_CART:
            return update(state, {
                cart: {
                    $set: payload
                }
            });
        case CLEAR_CART:
            return update(state, {
                cart: {
                    $set: []
                }
            });
        case UPDATE_DONATIONS:
            return update(state, {
                causeList: {
                    [payload.causeIndex]: {
                        Donations: {
                            $push: [payload.donation]
                        }
                    }
                }
            });
        case UPDATE_TOTAL:
            return update(state, {
                causeList: {
                    [payload.causeIndex]: {
                        totalRaised: {
                            $set: Number(state.causeList[payload.causeIndex].totalRaised) + Number(payload.amount)
                        }
                    }
                }
            });
        default:
            return state;
    }
};

export default reducer;
