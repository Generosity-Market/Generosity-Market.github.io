import Cookies from 'js-cookie';
import { isTestingEnvironment } from 'utilities';

// NOTE: add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => {
    const isProdEnv = process.env.NODE_ENV === 'production';
    const baseUrl = isProdEnv ? process.env.PROD_URL : 'http://localhost:3002/api';
    return baseUrl + endpoint;
};

const headers = {
    'Authorization': `Bearer ${Cookies.get('gm_id')}`,
};

// TODO: handle errors from services instead of logging...Alert system?
const fetcher = (URL, method, options) =>
    fetch(api(URL), { method, headers, ...options })
        .then(response => response.json())
        .then(data => data)
        /* eslint-disable-next-line no-console */
        .catch(err => !isTestingEnvironment && console.error('Error: ', err));

export const fetchJSONData = (URL, args) => fetcher(URL, 'GET', { body: args });

export const postFormData = (URL, args) => fetcher(URL, 'POST', { body: args });

export const postJSONData = (URL, args) => fetcher(URL, 'POST', args);

export const putJSONData = (URL, args) => fetcher(URL, 'PUT', args);
