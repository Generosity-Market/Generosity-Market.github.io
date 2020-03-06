import Cookies from 'js-cookie';
import { isTestingEnvironment } from 'utilities';

// NOTE: add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => {
    const isProdEnv = process.env.NODE_ENV === 'production';
    const baseUrl = isProdEnv ? process.env.REACT_APP_PROD_API : process.env.REACT_APP_DEV_API;
    return baseUrl + endpoint;
};

const getHeaders = ({ headers }) => {
    const token = Cookies.get('gm_id');
    return token
        ? {
            'Authorization': `Bearer ${Cookies.get('gm_id')}`,
            ...headers,
        }
        : { ...headers };
};

// TODO: handle errors from services instead of logging...Alert system?
const fetcher = (URL, method, options) =>
    fetch(api(URL), { ...options, method, headers: getHeaders(options), })
        .then(response => response.json())
        .then(data => data)
        /* eslint-disable-next-line no-console */
        .catch(err => !isTestingEnvironment && console.error('Error: ', err));

export const fetchJSONData = (URL, args) => fetcher(URL, 'GET', { body: args });

export const postFormData = (URL, args) => fetcher(URL, 'POST', { body: args });

export const postJSONData = (URL, args) => fetcher(URL, 'POST', args);

export const putJSONData = (URL, args) => fetcher(URL, 'PUT', { ...args });
