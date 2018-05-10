// NOTE add any services and api calls here. Don't expose api keys here. Use .env files for that purpose
const api = (endpoint) => {
  let baseURL = 'http://localhost:3000/';
  return baseURL + endpoint;
}

const fetchData = (URL, args) =>{
  return fetch( api(URL) )
         .then(response => {
           return response.json();
         })
         .then(data =>{
           return data;
         })
         .catch(err => {
           console.log("Error: ", err);
         })
};

const Services = {
  fetchCauseList: () => {
    return fetchData('causes.json');
  },
  fetchSingleCause: () => {
    return fetchData('causes.json');
  },
  fetchUserData: () => {
    return fetchData('user.json');
  },
  fetchOrgData: () => {
    return fetchData('organization.json');
  }
}

export default Services;
