import Cookies from 'js-cookie';

const initialState = {
    cause: {
        causeList: [],
        selectedCause: '',
    },
    token: Cookies.get('gm_id') || null,
    user: null,
    organization: {
        orgList: [],
        selectedOrg: '',
    },
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    pageData: {
        pageName: null,
        description: 'Fundraising platform for non-profits and charities',
        text: 'Fundraising platform for non-profits and charities',
        image: require('../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png'),
        title: 'Generosity Market',
        url: window.location.href,
    },
    // filter: 'all',
    // alert: { type: null, message: null }
};

export default initialState;