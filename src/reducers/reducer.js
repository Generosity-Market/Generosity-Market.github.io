import update from 'immutability-helper';
import initialState from './initialState';

import {
    ADD_CAUSE,
    ADD_TO_CART,
    CAUSE_SELECTED,
    CLEAR_CART,
    SET_DATA,
    REMOVE_FROM_CART,
    SET_ORGANIZATION,
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from '../actions/actions';

import {
    LOG_OUT,
    SET_USER,
    SET_TOKEN,
    REMOVE_TOKEN,
} from '../actions/user';

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
        case REMOVE_TOKEN:
            return update(state, {
                token: {
                    $set: null
                }
            })
        case LOG_OUT:
            return update(state, {
                user: {
                    $set: null
                }
            })
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
