import update from 'immutability-helper';
import initialState from 'store/initialState';

import {
    EDIT_USER,
    LOG_OUT,
    SET_USER,
    SET_USER_CREATED_CAUSES,
    SET_USER_SUPPORTED_CAUSES,
    SET_USER_IMAGES,
} from './types';

const userReducer = (state = initialState.user, { type, payload }) => {
    switch (type) {
        case EDIT_USER:
            return update(state, {
                $set: payload,
            });
        case SET_USER:
            return update(state, {
                $set: payload,
            });
        case LOG_OUT:
            return update(state, {
                $set: {},
            });
        case SET_USER_CREATED_CAUSES:
            return update(state, {
                CreatedCauses: {
                    $set: payload,
                }
            });
        case SET_USER_SUPPORTED_CAUSES:
            return update(state, {
                SupportedCauses: {
                    $set: payload,
                }
            });
        case SET_USER_IMAGES:
            return update(state, {
                $set: payload,
            });
        default:
            return state;
    }
};

export default userReducer;