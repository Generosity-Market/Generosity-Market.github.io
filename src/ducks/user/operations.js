import {
    logout,
    removeToken,
    setUser,
    setToken,
} from './actions';

import Cookies from 'js-cookie';
import Services from '../../services/services';
import { makeFetchCreator } from '../../actions/makeFetchCreator';

const {
    fetchUserData,
    registerUser,
    userLogin,
} = Services;

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
                console.log("Register Response: ", data);
                if (data.error) {
                    // dispatch(setAlert({ type: 'error', message: data.error }));
                    return data;
                } else {
                    // dispatch(setAlert({ type: 'success', message: fields.username + ' successfully registered' }))
                    return dispatch(login({ email, password }))
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
                console.log("Response data: ", data);
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
                    }, {
                            expires: 90
                        });
                    return data;
                }
            });
    };
};

// TODO finish this action...
export const loadTokenFromCookie = () => {
    return async (dispatch) => {
        const token = await Cookies.get('token');
        const user = await Cookies.getJSON('user');
        if (token && user) {
            dispatch(setToken(token));
            getUserData(user.id);
        }
        return user;
    }
};

export const userLogout = () => {
    return (dispatch) => {
        const token = Cookies.remove('token');
        Cookies.remove('user');
        dispatch(removeToken(token));
        dispatch(logout());
    }
}

// getting the logged in users information
export const getUserData = (id) => makeFetchCreator(fetchUserData, setUser, id);