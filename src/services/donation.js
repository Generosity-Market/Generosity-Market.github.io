import { postJSONData } from 'fetchers/genericFetchers';

export const submitPayment = (options) => postJSONData('/donations/new', options);