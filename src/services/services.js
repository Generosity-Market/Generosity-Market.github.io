// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => 'http://localhost:3000/api' + endpoint;
const searchURL = `https://projects.propublica.org/nonprofits/api/v2/organizations/`;

// NOTE use this to suppress console.logs in testing...
// if (process.env.NODE_ENV == 'development') {
//     console.log('browser');
// } else if (process.env.NODE_ENV == 'test') {
//     console.log('jest');
// }
const isTestingEnvironment = process.env.NODE_ENV === 'test';

const fetchData = (URL, args) =>
    fetch(api(URL))
    .then(response => response.json())
    .then(data => data)
    .catch(err => !isTestingEnvironment && console.log("Error: ", err));

const postData = (URL, args) =>
    fetch(api(URL), { method: "POST", body: args })
    .then(response => response.json())
    .then(data => {
        console.log("Service Data: ", data)
        return data;
    })
    .catch(err => !isTestingEnvironment && console.log("Error: ", err));

const fetchNonProfitStatus = (URL, taxID) => {
    const fetchURL = `${URL}${taxID}.json`;
    fetch(fetchURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error: ', err));
};

// NOTE if working locally w/o live api, change the url to the ones listed beside each action.
const Services = {
    fetchCauseList:         () => fetchData('/causes'),          // 'causes.json'
    fetchSingleCause:       (id) => fetchData(`/causes/${id}`),  // 'causes.json'
    fetchUserData:          () => fetchData('/user/1'),          // 'user.json'
    fetchOrgData:           () => fetchData(`/organizations/2`), // 'organization.json'
    verifyNonProfitStatus:  (taxID) => fetchNonProfitStatus(searchURL, taxID),
    submitFormData:         (data) => postData('/causes/new', data),
    // submitFormData:         (data) => postData('/causes/new', {method: "POST", data: data}),
};

export default Services;
