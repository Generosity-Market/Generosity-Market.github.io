import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/reducer';
import initialState from './initialState';

// Creating the redux store with middleware
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(ReduxPromise),
        applyMiddleware(thunk)
    ),
);

export default store;