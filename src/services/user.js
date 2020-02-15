import {
    fetchJSONData,
    postJSONData,
    postFormData,
    putJSONData,
} from 'fetchers/genericFetchers';

export const userLogin = (data) => postJSONData('/users/login', data);

export const registerUser = (data) => postJSONData('/users', data);

export const fetchUserData = (id) => fetchJSONData(`/users/${id}`);

export const fetchUserCreatedCauses = (id) => fetchJSONData(`/users/${id}/causes`);

export const fetchUserSupportedCauses = (id) => fetchJSONData(`/users/${id}/donations`);

export const putEditedUser = (id, data) => putJSONData(`/users/${id}`, data);

export const postUserImages = (id, data) => postFormData(`/users/${id}/images`, data);
