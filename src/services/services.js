import { fetchJSONData, postFormData, postJSONData } from '../fetchers/genericFetchers';
import { fetchNonProfitStatus } from '../fetchers/nonProfitVerificationFetcher';
import { getLazyImagePlaceholder } from '../fetchers/lazyPlaceholderFetcher';

const Services = {
    fetchCauseList: () => fetchJSONData('/causes'),

    fetchSingleCause: (id) => fetchJSONData(`/causes/${id}`),

    fetchUserData: () => fetchJSONData('/user/1'),

    fetchOrgData: () => fetchJSONData(`/organizations/2`),

    userLogin: (data) => postJSONData('/login', data),

    submitCauseForm: (data) => postFormData('/causes/new', data),
    
    submitOrgForm: (data) => postFormData('/organizations/new', data), 
    
    submitPayment: (options) => postJSONData('/charge/new', options),
    
    verifyNonProfitStatus: (taxID) => fetchNonProfitStatus(taxID),

    getLazyImagePlaceholder: () => getLazyImagePlaceholder(),
};

export default Services;
