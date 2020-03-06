import {
    fetchJSONData,
    postFormData,
} from 'fetchers/genericFetchers';

import { getLazyImagePlaceholder } from 'fetchers/lazyPlaceholderFetcher';

export const fetchCauseList = () => fetchJSONData('/causes');

export const fetchSingleCause = (id) => fetchJSONData(`/causes/${id}`);

export const submitCauseFormData = (data) => postFormData('/causes', data);

export const getPlaceholder = () => getLazyImagePlaceholder();