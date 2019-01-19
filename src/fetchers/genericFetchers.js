import Utils from 'utilities/utilities';

// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => 'http://localhost:3000/api' + endpoint;
// const api = endpoint => 'https://gen-mar-poc.herokuapp.com/api' + endpoint;

// TODO handle errors from services instead of logging...Alert system?
export const fetchJSONData = (URL, args) =>
    fetch(api(URL), { method: 'GET', body: args })
        .then(response => response.json())
        .then(data => data)
        .catch(err => !Utils.isTestingEnvironment && console.log("Error: ", err));

export const postFormData = (URL, args) =>
    fetch(api(URL), { method: 'POST', body: args })
        .then(response => response.json())
        .then(data => data)
        .catch(err => !Utils.isTestingEnvironment && console.log("Error: ", err));

export const postJSONData = (URL, args) =>
    fetch(api(URL), { method: 'POST', ...args })
        .then(response => response.json())
        .then(data => data)
        .catch(err => !Utils.isTestingEnvironment && console.log("Error: ", err));