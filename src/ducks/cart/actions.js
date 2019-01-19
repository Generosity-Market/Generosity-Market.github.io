import { makeActionCreator } from 'actions/makeActionCreator';

import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
} from './types';

export const addToCart = makeActionCreator(ADD_TO_CART);
export const clearCart = makeActionCreator(CLEAR_CART);
export const removeFromCart = makeActionCreator(REMOVE_FROM_CART);