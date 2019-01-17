import userReducer from './reducer';
export {
    register,
    login,
    loadTokenFromCookie,
    userLogout,
    getUserData,
} from './operations';

export {
    LOG_OUT,
    REMOVE_TOKEN,
    SET_USER,
    SET_TOKEN,
} from './types';

export default userReducer;