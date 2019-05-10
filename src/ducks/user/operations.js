import {
    editUser,
    logout,
    removeToken,
    setUser,
    setToken,
    setUserCreatedCauses,
    setUserSupportedCauses,
} from './actions';

import Cookies from 'js-cookie';
import { makeFetchCreator } from 'actions/makeFetchCreator';

import {
    fetchUserData,
    registerUser,
    userLogin,
    postEditedUser,
    fetchUserCreatedCauses,
    fetchUserSupportedCauses,
} from 'services';

export const register = ({ email, password }) => {
    return (dispatch) => {
        return registerUser({
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                /* eslint-disable-next-line no-console */
                console.log('Register Response: ', data);
                if (data.error) {
                    // dispatch(setAlert({ type: 'error', message: data.error }));
                    return data;
                } else {
                    // dispatch(setAlert({ type: 'success', message: fields.username + ' successfully registered' }))
                    return dispatch(login({ email, password }));
                    // return data;
                }
            });
    };
};

export const login = ({ email, password }) => {
    return (dispatch) => {
        return userLogin({
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(data => {
                /* eslint-disable-next-line no-console */
                console.log('Response data: ', data);
                if (data.error) {
                    // dispatch(setAlert({ type: 'error', message: data.errors }));
                    return data;
                } else {
                    const { user } = data;
                    // dispatch(setAlert({ type: null, message: null }))
                    dispatch(setToken(data['auth_token']));
                    dispatch(setUser({ ...user }));

                    Cookies.set('token', data['auth_token'], { expires: 90 });
                    Cookies.set('user', {
                        email: user['email'],
                        name: user['name'],
                        id: user['id'],
                    }, { expires: 90 }
                    );
                    return data;
                }
            });
    };
};

export const editUserData = (id, { address, name, phone }) => {
    // TODO this is called directly in component -> fetch(POST) -> action -> reducer -> rerender
    // TODO Should do input validations here?
    return (dispatch, getState) => {
        return postEditedUser(id, {
            body: JSON.stringify({
                phone,
                address,
                name,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                if (data.error) {
                    // dispatch(setAlert({ type: 'error', message: data.error }));
                    return data;
                } else {
                    let prevUserState = getState().user.user;

                    const newUserState = {
                        ...data,
                        CreatedCauses: prevUserState.CreatedCauses,
                        Preferences: prevUserState.Preferences,
                    };

                    dispatch(editUser(newUserState));
                    return true;
                }
            });
    };
};

// TODO finish this action...
export const loadTokenFromCookie = () => {
    return async (dispatch) => {
        const token = Cookies.get('token');
        const user = Cookies.getJSON('user');
        if (token && user) {
            dispatch(setToken(token));
            dispatch(getUserData(user.id));
        }
        // return user;
    };
};

export const userLogout = () => {
    return (dispatch) => {
        const token = Cookies.remove('token');
        Cookies.remove('user');
        dispatch(removeToken(token));
        dispatch(logout());
    };
};

export const getUserData = (id) => makeFetchCreator(fetchUserData, setUser, id);

// Getting the logged in users created causes
export const getUserCreatedCauses = (id) => makeFetchCreator(fetchUserCreatedCauses, setUserCreatedCauses, id);

// Gettings all donations made by the logged in user
export const getUserSupportedCauses = (id) => makeFetchCreator(fetchUserSupportedCauses, setUserSupportedCauses, id);