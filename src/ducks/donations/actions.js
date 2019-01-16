import { makeActionCreator } from '../../actions/makeActionCreator'

import {
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from './types';

export const setDonations = makeActionCreator(UPDATE_DONATIONS);
export const updateTotal = makeActionCreator(UPDATE_TOTAL);

