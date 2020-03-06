import update from 'immutability-helper';
import initialState from 'store/store';

import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
} from './types';

const cartReducer = (state = initialState.cart, { type, payload = [] }) => {
    switch (type) {
        case ADD_TO_CART:
            return update(state, {
                $push: [payload]
            });
        case REMOVE_FROM_CART:
            return update(state, {
                $set: payload
            });
        case CLEAR_CART:
            return update(state, {
                $set: []
            });
        default:
            return state;
    }
};

export default cartReducer;