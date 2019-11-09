import {
    isTestingEnvironment,
} from 'utilities';

// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => {
    const isProdEnv = process.env.NODE_ENV === 'production';
    const baseUrl = isProdEnv ? 'https://gen-mar-poc.herokuapp.com/api' : 'http://localhost:3002/api';
    return baseUrl + endpoint;
};

// TODO handle errors from services instead of logging...Alert system?
const fetcher = (URL, method, options) =>
    fetch(api(URL), { method, ...options })
        .then(response => response.json())
        .then(data => data)
        /* eslint-disable-next-line no-console */
        .catch(err => !isTestingEnvironment && console.log('Error: ', err));

export const fetchJSONData = (URL, args) => fetcher(URL, 'GET', { body: args });

export const postFormData = (URL, args) => fetcher(URL, 'POST', { body: args });

export const postJSONData = (URL, args) => fetcher(URL, 'POST', args);