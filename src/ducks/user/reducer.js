import update from 'immutability-helper';
import Cookies from 'js-cookie';

import {
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
} from './types';

const initialState = {
    user: null,
    token: Cookies.get('token'),
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
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
        default:
            return state;
    }
}

export default userReducer;