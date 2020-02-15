import {
    fetchJSONData,
    postFormData,
} from 'fetchers/genericFetchers';

import { fetchNonProfitStatus } from 'fetchers/nonProfitVerificationFetcher';

export const fetchOrgData = (id) => fetchJSONData(`/organizations/${id}`);

export const submitOrgFormData = (data) => postFormData('/organizations/new', data);

export const verifyNonProfitStatus = (tax_id) => fetchNonProfitStatus(tax_id);