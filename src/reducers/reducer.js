import { combineReducers } from 'redux';

import cartReducer from 'ducks/cart';
import userReducer from 'ducks/user';
import causeReducer from 'ducks/cause';
import organizationReducer from 'ducks/organization';
import tokenReducer from 'ducks/auth_token';
import pageDataReducer from 'ducks/pageData';

const rootReducer = combineReducers({
    user: userReducer,
    token: tokenReducer,
    cause: causeReducer,
    cart: cartReducer,
    organization: organizationReducer,
    pageData: pageDataReducer,
});

export default rootReducer;
