const searchURL = 'https://projects.propublica.org/nonprofits/api/v2/organizations/';

export const fetchNonProfitStatus = (tax_id) => {
    const fetchURL = `${searchURL}${tax_id}.json`;
    fetch(fetchURL)
        .then(response => response.json())
        .then(data => data)
        /* eslint-disable-next-line no-console */
        .catch(err => console.log('Error: ', err));
};