import { makeActionCreator } from 'actions/makeActionCreator';
import {
    REMOVE_TOKEN,
    SET_TOKEN,
} from './types';

export const removeToken = makeActionCreator(REMOVE_TOKEN);
export const setToken = makeActionCreator(SET_TOKEN);
