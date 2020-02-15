import update from 'immutability-helper';
import initialState from 'store/store';

import {
    REMOVE_TOKEN,
    SET_TOKEN,
} from './types';

const tokenReducer = (state = initialState.token, { type, payload }) => {
    switch (type) {
        case SET_TOKEN:
            return update(state, {
                $set: payload,
            });
        case REMOVE_TOKEN:
            return update(state, {
                $set: null,
            });
        default:
            return state;
    }
};

export default tokenReducer;