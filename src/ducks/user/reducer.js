import update from 'immutability-helper';
import initialState from 'store/store';

import {
    EDIT_USER,
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
    SET_USER_CREATED_CAUSES,
    SET_USER_SUPPORTED_CAUSES,
} from './types';

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case EDIT_USER:
            return update(state, {
                user: {
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
                    $set: payload
                }
            });
        case REMOVE_TOKEN:
            return update(state, {
                token: {
                    $set: null
                }
            });
        case LOG_OUT:
            return update(state, {
                user: {
                    $set: null
                }
            });
        case SET_USER_CREATED_CAUSES:
            return update(state, {
                user: {
                    CreatedCauses: {
                        $set: payload
                    }
                }
            });
        case SET_USER_SUPPORTED_CAUSES:
            return update(state, {
                user: {
                    SupportedCauses: {
                        $set: payload
                    }
                }
            });
        default:
            return state;
    }
};

export default userReducer;