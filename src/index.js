// boilerplate from create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// imports from redux and react-router
// TODO import 'Redirect' from RRD when redux/auth/api is implemented
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/reducer';
// import Cookies from 'js-cookie';

// component imports
import BaseLayout from './containers/BaseLayout/BaseLayout';
import App from './containers/App';
import Splash from './screens/Splash/Splash';
import Dashboard from './screens/Dashboard/Dashboard';
import CauseList from './screens/CauseList/CauseList';
import CauseForm from './screens/CauseForm/CauseForm';
import Organization from './screens/Organization/Organization';
import SingleCause from './screens/SingleCause/SingleCause';
import Checkout from './screens/Checkout/Checkout';


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
      <Switch>
        <Route  exact path='/login' component={App} />
        <Route  exact path='/users/:id/dashboard' component={Dashboard} />
        <Route  exact path='/checkout' component={Checkout} />
        <Route  exact path='/cause/:id' component={SingleCause} />
        <Route  exact path='/causes/new' component={CauseForm} />
        <Route  exact path='/causes' component={CauseList} />
        <Route  exact path='/organizations/:id' component={Organization} />
        <Route  exact path='/' component={Splash} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
