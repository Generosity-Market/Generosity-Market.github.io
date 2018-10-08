import Utils from '../utilities/utilities';

// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => 'http://localhost:3000/api' + endpoint;
const searchURL = `https://projects.propublica.org/nonprofits/api/v2/organizations/`;

// NOTE use this to suppress console.logs in testing...
// TODO but for real we should do better error handling anywayz...
const isTestingEnvironment = process.env.NODE_ENV === 'test';

const fetchData = (URL, args) =>
    fetch(api(URL))
    .then(response => response.json())
    .then(data => data)
    .catch(err => !isTestingEnvironment && console.log("Error: ", err));

const postFormData = (URL, args) =>
    fetch(api(URL), { method: "POST", body: args })
    .then(response => response.json())
    .then(data => data)
    .catch(err => !isTestingEnvironment && console.log("Error: ", err));

const postJSONData = (URL, args) =>
    fetch(api(URL), { method: "POST", ...args })
    .then(response => response.json())
    .then(data => data)
    .catch(err => !isTestingEnvironment && console.log("Error: ", err));

const fetchNonProfitStatus = (URL, taxID) => {
    const fetchURL = `${URL}${taxID}.json`;
    fetch(fetchURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error: ', err));
};

const Services = {
    fetchCauseList:         () => fetchData('/causes'),
    fetchSingleCause:       (id) => fetchData(`/causes/${id}`),
    fetchUserData:          () => fetchData('/user/1'),
    fetchOrgData:           () => fetchData(`/organizations/2`),
    verifyNonProfitStatus:  (taxID) => fetchNonProfitStatus(searchURL, taxID),
    submitCauseForm:        (data) => postFormData('/causes/new', data),
    submitOrgForm:          (data) => postFormData('/organizations/new', data), 
    submitPayment:          (options) => postJSONData('/charge/new', options),
    // submitFormData:         (data) => postData('/causes/new', {method: "POST", data: data}),
    getLazyImagePlaceholder: () => {
        const imageIds = ['1011', '1012', '900', '768', '701', '612', '539', '328', '216', '165']
        return `https://picsum.photos/200/300?image=${imageIds[Utils.getRandomNumber(imageIds.length)]}&blur`;
    },
};

export default Services;
