import { makeActionCreator } from '../../actions/makeActionCreator';

import {
    ADD_ORGANIZATION,
    SET_ORGANIZATION,
} from './types';

export const addOrg = makeActionCreator(ADD_ORGANIZATION);
export const setOrg = makeActionCreator(SET_ORGANIZATION);