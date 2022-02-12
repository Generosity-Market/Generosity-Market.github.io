// Boilerplate imports from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux and React-router
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';

// Components and Routes
import { BaseLayout } from 'components/containers';
import Routes from './routes/Routes';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Routes />
            </BaseLayout>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
