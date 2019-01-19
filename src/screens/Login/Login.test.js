import React from 'react';
import ReactDOM from 'react-dom';
import App from './Login.js';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers/reducer';

let store = createStore(reducers);

describe('<App />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>, div);
    });
});
