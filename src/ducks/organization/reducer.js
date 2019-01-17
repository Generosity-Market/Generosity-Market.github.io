import update from 'immutability-helper';
import initialState from '../store';

import {
    ADD_ORGANIZATION,
    SET_ORGANIZATION
} from './types';

const organizationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_ORGANIZATION:
            return update(state, {
                selectedOrg: {
                    $set: payload
                }
            });
        // TODO finish this case
        case ADD_ORGANIZATION:
            return state; // For now
        default:
            return state;
    }
}

export default organizationReducer;