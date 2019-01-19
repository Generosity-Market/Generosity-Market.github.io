import { combineReducers } from 'redux';

import cartReducer from 'ducks/cart';
import userReducer from 'ducks/user';
import causeReducer from 'ducks/cause';
import organizationReducer from 'ducks/organization';

const rootReducer = combineReducers({
    user: userReducer,
    cause: causeReducer,
    cart: cartReducer,
    organization: organizationReducer,
})

export default rootReducer;
