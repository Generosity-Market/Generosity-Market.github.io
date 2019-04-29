import { makeActionCreator } from 'actions/makeActionCreator';
import {
    EDIT_USER,
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
    SET_USER_CREATED_CAUSES,
    SET_USER_SUPPORTED_CAUSES,
    SET_USER_IMAGES,
} from './types';

export const editUser = makeActionCreator(EDIT_USER);
export const logout = makeActionCreator(LOG_OUT);
export const removeToken = makeActionCreator(REMOVE_TOKEN);
export const setUser = makeActionCreator(SET_USER);
export const setToken = makeActionCreator(SET_TOKEN);
export const setUserCreatedCauses = makeActionCreator(SET_USER_CREATED_CAUSES);
export const setUserSupportedCauses = makeActionCreator(SET_USER_SUPPORTED_CAUSES);
export const setUserImages = makeActionCreator(SET_USER_IMAGES);