import Cookies from 'js-cookie';

const initialState = {
    // User related state
    user: null,
    token: Cookies.get('token'),

    // Cause related state
    causeList: [],
    selectedCause: '',

    // Organization related State
    orgList: [],
    selectedOrg: '',

    // Cart related State
    cart: [],
    // cartTotal? or just use a function to determine the total?

    // filter: 'all',
    // alert: { type: null, message: null }
};

export default initialState;