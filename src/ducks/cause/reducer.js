import update from 'immutability-helper';

import {
    ADD_CAUSE,
    CAUSE_SELECTED,
    SET_DATA,
} from './types';

const initialState = {
    causeList: [],
    selectedCause: '',
}

const causeReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export default causeReducer;