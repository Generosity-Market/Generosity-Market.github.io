import React, { Suspense } from 'react';
import Cookies from 'js-cookie';
import './RouteTransitions.css';

import {
    Switch,
    Route,
    withRouter,
    Redirect,
} from 'react-router-dom';

import {
    TransitionGroup,
    CSSTransition,
} from 'react-transition-group';

import {
    Splash,
    Dashboard,
    CauseList,
    CauseDetail,
    Checkout,
    ThankYou,
    Organization,
    NewOrgForm,
    CauseForm,
    Login,
    Error404,
} from './LazyLoadedRoutes';


// checking to see if there are cookies for authentication
const loggedIn = () => {
    return !!Cookies.get('gm_id');
};

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
                            !loggedIn() || !userCookie
                                ? <Login />
                                : <Redirect to={`/users/${userCookie.id}/dashboard`} />
                        )} />

                        <Route exact path='/users/:id/dashboard' render={() => (
                            loggedIn()
                                ? <Dashboard userData={userCookie} />
                                : <Redirect
                                    to={{
                                        pathname: '/login',
                                        state: { from: '/users/:id/dashboard' }
                                    }}
                                />
                        )} />

                        <Route exact path='/checkout' component={Checkout} />

                        <Route exact path='/thankyou' component={ThankYou} />

                        <Route exact path='/cause/:id' component={CauseDetail} />

                        <Route exact path='/causes/new' render={() => (
                            loggedIn()
                                ? <CauseForm />
                                : <Redirect to={{ pathname: '/login', state: { from: '/causes/new' } }} />
                        )} />

                        <Route exact path='/causes' component={CauseList} />

                        <Route exact path='/organizations/new' component={NewOrgForm} />

                        <Route exact path='/organizations/:id' component={Organization} />

                        <Route exact path='/' render={() => (
                            !loggedIn()
                                ? <Splash />
                                : <Redirect to={{ pathname: `/users/${userCookie.id}/dashboard` }} />
                        )} />

                        <Route component={Error404} />

                    </Switch>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Routes);
