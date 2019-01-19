import { makeActionCreator } from 'actions/makeActionCreator';

import {
    ADD_CAUSE,
    CAUSE_SELECTED,
    SET_DATA,
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from './types';

export const addCause = makeActionCreator(ADD_CAUSE);
export const causeSelected = makeActionCreator(CAUSE_SELECTED);
export const setData = makeActionCreator(SET_DATA);
export const setDonations = makeActionCreator(UPDATE_DONATIONS);
export const updateTotal = makeActionCreator(UPDATE_TOTAL);