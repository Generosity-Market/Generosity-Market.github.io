import { postJSONData } from 'fetchers/genericFetchers';

export const submitPayment = (options) => postJSONData('/charge/new', options);