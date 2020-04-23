import update from 'immutability-helper';
import initialState from 'store/initialState';

import {
    RESET_PAGE_DATA,
    SET_PAGE_DATA,
} from './types';

const pageDataReducer = (state = initialState.pageData, { type, payload }) => {
    switch (type) {
        case SET_PAGE_DATA:
            return update(state, {
                $merge: payload,
            });
        case RESET_PAGE_DATA:
            return update(state, {
                $set: initialState.pageData,
            });
        default:
            return state;
    }
};

export default pageDataReducer;