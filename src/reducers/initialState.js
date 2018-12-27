import Cookies from 'js-cookie';

const initialState = {
    causeList: [],
    selectedCause: '',
    user: '',
    orgList: [],
    selectedOrg: '',
    cart: [],
    token: Cookies.get('token'),
    filter: 'all',
    alert: { type: null, message: null }
};

export default initialState;