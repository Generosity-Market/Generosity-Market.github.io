// Boilerplate imports from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux and React-router
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/reducer';
import initialState from './store/store';


// Components and Routes
import { BaseLayout } from 'components/containers';
import Routes from './routes/Routes';

// Creating the redux store with middleware
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(ReduxPromise),
        applyMiddleware(thunk)
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Routes />
            </BaseLayout>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
