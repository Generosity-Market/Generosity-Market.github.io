// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => 'http://localhost:3000/api' + endpoint;

// NOTE use this to suppress console.logs in testing...
// TODO but for real we should do better error handling anywayz...
export const isTestingEnvironment = process.env.NODE_ENV === 'test';

export const fetchJSONData = (URL, args) =>
    fetch(api(URL))
        .then(response => response.json())
        .then(data => data)
        .catch(err => !isTestingEnvironment && console.log("Error: ", err));

export const postFormData = (URL, args) =>
    fetch(api(URL), { method: "POST", body: args })
        .then(response => response.json())
        .then(data => data)
        .catch(err => !isTestingEnvironment && console.log("Error: ", err));

export const postJSONData = (URL, args) =>
    fetch(api(URL), { method: "POST", ...args })
        .then(response => response.json())
        .then(data => data)
        .catch(err => !isTestingEnvironment && console.log("Error: ", err));