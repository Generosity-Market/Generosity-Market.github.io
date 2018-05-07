// NOTE add any services and api calls here. Don't expose api keys here. Use .env files for that purpose
const endpoint = 'http://localhost:3000/sampleData.json';

const services = {
  fetchCauseList: () => {
    return fetch(endpoint)
           .then(response => {
             return response.json();
           })
           .then(data =>{
             return data;
           })
           .catch(err => {
             console.log("Error: ", err);
           })
  },
  fetchSingleCause: (id) => {
    return fetch(endpoint)
           .then(response => {
             return response.json();
           })
           .then(data => {
             return data.filter(index => index.id === Number(id));
           })
           .catch(err => {
             console.log("Error: ", err);
           })
  }
}

export default services;
