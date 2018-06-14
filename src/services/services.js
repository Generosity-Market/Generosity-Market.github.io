// NOTE add any services and api calls here. Don't expose api keys here. Use env files instead
const api = endpoint => 'http://localhost:3000/api' + endpoint;
const searchURL = `https://projects.propublica.org/nonprofits/api/v2/organizations/`;

const fetchData = (URL, args) =>
    fetch(api(URL))
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log("Error: ", err));

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
    fetchSingleCause:       (id) => fetchData(`/causes/${id}`),          // 'causes.json'
    fetchUserData:          () => fetchData('/user/1'),          // 'user.json'
    fetchOrgData:           () => fetchData(`/organizations/2`), // 'organization.json'
    verifyNonProfitStatus:  (taxID) => fetchNonProfitStatus(searchURL, taxID)
};

export default Services;
