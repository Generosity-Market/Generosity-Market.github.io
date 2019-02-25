import update from 'immutability-helper';
import initialState from 'store/store';

import {
    ADD_CAUSE,
    CAUSE_SELECTED,
    SET_DATA,
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from './types';

const causeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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

export default causeReducer;