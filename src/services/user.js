import {
    fetchJSONData,
    postJSONData,
    postFormData,
} from 'fetchers/genericFetchers';

export const userLogin = (data) => postJSONData('/login', data);

export const registerUser = (data) => postJSONData('/signup', data);

export const postEditedUser = (id, data) => postJSONData(`/users/${id}/edit`, data);

export const postUserImages = (id, data) => postFormData(`/users/${id}/images`, data);

export const fetchUserData = (id) => fetchJSONData(`/users/${id}`);

export const fetchUserCreatedCauses = (id) => fetchJSONData(`/users/${id}/causes`);

export const fetchUserSupportedCauses = (id) => fetchJSONData(`/users/${id}/donations`);