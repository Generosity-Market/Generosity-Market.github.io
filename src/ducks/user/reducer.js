import update from 'immutability-helper';
import initialState from 'store/store';

import {
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
    SET_USER_CAUSES,
    SET_USER_DONTATIONS,
} from './types';

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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
            })
        case LOG_OUT:
            return update(state, {
                user: {
                    $set: null
                }
            })
        case SET_USER_CAUSES:
            return update(state, {
                user: {
                    Causes: {
                        $set: payload
                    }
                }
            })
        case SET_USER_DONTATIONS:
            return update(state, {
                user: {
                    Donations: {
                        $set: payload
                    }
                }
            })
        default:
            return state;
    }
}

export default userReducer;