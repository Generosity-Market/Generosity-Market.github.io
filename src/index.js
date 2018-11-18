// Boilerplate imports from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux and React-router
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/reducer';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Cookies from 'js-cookie';

// Components and Routes
import BaseLayout from './containers/BaseLayout/BaseLayout';
import Routes from './routes/Routes';


// creating the redux store with middleware
const store = createStore(
    reducers,
    compose(
        applyMiddleware(reduxThunk)
    )
);

// checking to see if there are cookies for authentication
// const loggedIn = () => {
//   let cookie = Cookies.get('token');
//     return !!cookie;
// }

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Routes/>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
