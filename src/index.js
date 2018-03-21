// boilerplate from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// imports from redux and react-router
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers/reducer';
// import Cookies from 'js-cookie';

// component imports
import BaseLayout from './containers/BaseLayout';
import App from './containers/App';
import Splash from './containers/Splash';


// creating the redux store with middleware
// const store = createStore(
//     reducers,
//     compose(
//         applyMiddleware(reduxThunk)
//     )
// );

// checking to see if there are cookies for authentication
// const loggedIn = () => {
//   let cookie = Cookies.get('token');
//     return !!cookie;
// }

ReactDOM.render(
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route  exact path='/splash' component={Splash} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
