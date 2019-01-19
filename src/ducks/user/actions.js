import { makeActionCreator } from 'actions/makeActionCreator';
import {
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
    SET_USER_CAUSES,
    SET_USER_DONTATIONS,
} from './types';

export const logout = makeActionCreator(LOG_OUT);
export const removeToken = makeActionCreator(REMOVE_TOKEN);
export const setUser = makeActionCreator(SET_USER);
export const setToken = makeActionCreator(SET_TOKEN);
export const setUserCauses = makeActionCreator(SET_USER_CAUSES);
export const setUserDonations = makeActionCreator(SET_USER_DONTATIONS);