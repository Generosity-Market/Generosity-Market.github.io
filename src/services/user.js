import {
    fetchJSONData,
    postJSONData,
} from 'fetchers/genericFetchers';

export const userLogin = (data) => postJSONData('/login', data);

export const registerUser = (data) => postJSONData('/signup', data);

export const fetchUserData = (id) => fetchJSONData(`/user/${id}`);

export const fetchUserCreatedCauses = (id) => fetchJSONData(`/user/${id}/causes`);

export const fetchUserSupportedCauses = (id) => fetchJSONData(`/user/${id}/donations`);