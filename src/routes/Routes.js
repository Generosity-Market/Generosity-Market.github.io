import React, { Suspense } from 'react';
import Cookies from 'js-cookie';
import './Routes.css';

// TODO import 'Redirect' from RRD when redux/auth/api is implemented
import {
    Switch,
    Route,
    withRouter,
    Redirect,
} from 'react-router-dom';

import {
    TransitionGroup,
    CSSTransition,
} from "react-transition-group";

// Lazy importing each route using React.lazy and React Suspense
const Splash = React.lazy(() => import('../screens/Splash/Splash'));
const Dashboard = React.lazy(() => import('../screens/Dashboard/Dashboard'));
const CauseList = React.lazy(() => import('../screens/CauseList/CauseList'));
const CauseDetail = React.lazy(() => import('../screens/CauseDetail/CauseDetail'));
const Checkout = React.lazy(() => import('../screens/Checkout/Checkout'));
const ThankYou = React.lazy(() => import('../screens/ThankYou/ThankYou'));
const Organization = React.lazy(() => import('../screens/Organization/Organization'));
const NewOrgForm = React.lazy(() => import('../screens/NewOrgForm/NewOrgForm'));
const CauseForm = React.lazy(() => import('../screens/CauseForm/CauseForm'));
const Login = React.lazy(() => import('../screens/Login/Login'));
const Error404 = React.lazy(() => import('../screens/Error404/Error404'));

// checking to see if there are cookies for authentication
const loggedIn = () => {
    return !!Cookies.get('token');
}

const userCookie = Cookies.getJSON('user');

const Routes = ({ location }) => {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <Suspense fallback={null}>
                    <Switch location={location}>

                        <Route exact path='/login' render={() => (
                            !loggedIn() || !userCookie ? <Login/> : <Redirect to={`/users/${userCookie.id}/dashboard`} />
                        )} />

                        <Route exact path='/users/:id/dashboard' render={() => (
                            loggedIn() ? <Dashboard userData={userCookie} /> : <Redirect to={{pathname: '/login', state: { from: '/users/:id/dashboard'} }} />
                        )} />

                        <Route exact path='/checkout' component={Checkout} />

                        <Route exact path='/thankyou' component={ThankYou} />

                        <Route exact path='/cause/:id' component={CauseDetail} />

                        <Route exact path='/causes/new' render={() => (
                            loggedIn() ? <CauseForm/> : <Redirect to={{pathname: '/login', state: { from: '/causes/new'}}}/>
                        )} />

                        <Route exact path='/causes' component={CauseList} />

                        <Route exact path='/organizations/new' component={NewOrgForm} />

                        <Route exact path='/organizations/:id' component={Organization} />

                        <Route exact path='/'  render={() => (
                            !loggedIn() ? <Splash /> : <Redirect to={{ pathname: `/users/${userCookie.id}/dashboard` }} />
                        )} />

                        <Route component={Error404} />

                    </Switch>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    )
};

export default withRouter(Routes);
