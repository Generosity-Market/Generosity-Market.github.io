import { fetchJSONData, postFormData, postJSONData } from 'fetchers/genericFetchers';
import { fetchNonProfitStatus } from 'fetchers/nonProfitVerificationFetcher';
import { getLazyImagePlaceholder } from 'fetchers/lazyPlaceholderFetcher';

// TODO split this into different types of services much like actions...Examples: User, Cause, etc...
const Services = {
    fetchCauseList: () => fetchJSONData('/causes'),

    fetchSingleCause: (id) => fetchJSONData(`/causes/${id}`),

    fetchUserData: (id) => fetchJSONData(`/user/${id}`),

    fetchUserCreatedCauses: (id) => fetchJSONData(`/user/${id}/causes`),

    fetchUserSupportedCauses: (id) => fetchJSONData(`/user/${id}/donations`),

    fetchOrgData: (id) => fetchJSONData(`/organizations/${id}`),

    userLogin: (data) => postJSONData('/login', data),

    registerUser: (data) => postJSONData('/signup', data),

    submitCauseForm: (data) => postFormData('/causes/new', data),

    submitOrgForm: (data) => postFormData('/organizations/new', data),

    submitPayment: (options) => postJSONData('/charge/new', options),

    verifyNonProfitStatus: (taxID) => fetchNonProfitStatus(taxID),

    getLazyImagePlaceholder: () => getLazyImagePlaceholder(),
};

export default Services;
