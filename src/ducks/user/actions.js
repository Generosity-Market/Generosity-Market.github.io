import { makeActionCreator } from 'actions/makeActionCreator';
import {
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
} from './types';

export const logout = makeActionCreator(LOG_OUT);
export const removeToken = makeActionCreator(REMOVE_TOKEN);
export const setUser = makeActionCreator(SET_USER);
export const setToken = makeActionCreator(SET_TOKEN);