// NOTE add any services and api calls here. Don't expose api keys here. Use .env files for that purpose
const api = endpoint => 'http://localhost:3000/api/' + endpoint;

const fetchData = (URL, args) =>
  fetch(api(URL))
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log("Error: ", err))

const Services = {
  fetchCauseList:   () => fetchData('/causes'),
  fetchSingleCause: () => fetchData('/causes'),
  fetchUserData:    () => fetchData('/user/1'),
  fetchOrgData:     () => fetchData(`/organizations/2`)
}

export default Services;
