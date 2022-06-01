import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// mocked values
import mockState from './mockState';
// initial redux state
import reduxInitialState from 'store/initialState';

const WrapperProvider = ({
    children,
    initialState = mockState,
    reducer,
}) => {
    const state = {
        ...reduxInitialState,
        ...initialState,
    };

    const store = createStore(reducer = (state) => state, state);

    return (
        <BrowserRouter>
            <Provider store={store}>{children}</Provider>
        </BrowserRouter>
    );
};

export default WrapperProvider;