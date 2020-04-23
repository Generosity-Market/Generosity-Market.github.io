import { makeActionCreator } from 'actions/makeActionCreator';
import {
    SET_PAGE_DATA,
    RESET_PAGE_DATA,
} from './types';

export const setPageData = makeActionCreator(SET_PAGE_DATA);
export const resetPageData = makeActionCreator(RESET_PAGE_DATA);
