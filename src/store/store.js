import Cookies from 'js-cookie';

const initialState = {
    cause: {
        causeList: [],
        selectedCause: '',
    },
    user: {
        token: Cookies.get('token'),
        user: null,
    },
    organization: {
        orgList: [],
        selectedOrg: '',
    },
    cart: {
        cart: [],
    },
    filter: 'all',
    alert: { type: null, message: null }
};

export default initialState;