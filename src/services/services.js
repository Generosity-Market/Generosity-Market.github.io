// NOTE add any services and api calls here. Don't expose api keys here. Use .env files for that purpose
const api = endpoint => 'http://localhost:3000/api/' + endpoint;

const fetchData = (URL, args) =>
  fetch(api(URL))
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log("Error: ", err))

const Services = {
  fetchCauseList:   () => fetchData('causes.json'),
  fetchSingleCause: () => fetchData('causes.json'),
  fetchUserData:    () => fetchData('user.json'),
  fetchOrgData:     () => fetchData('organization.json')
}

export default Services;
