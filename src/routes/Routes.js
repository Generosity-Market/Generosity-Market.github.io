import React, { Suspense } from 'react';
import Cookies from 'js-cookie';
import './RouteTransitions.css';

import {
    Routes as Router,
    Route,
    Navigate,
    useLocation,
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

const userCookie = JSON.parse(Cookies.get('user'));

const Routes = () => {
    const location = useLocation();

    const isLoggedIn = loggedIn();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <Suspense fallback={null}>
                    <Router location={location}>

                        <Route
                            path='/login'
                            element={
                                isLoggedIn
                                    ? <Login />
                                    : <Navigate to={`/users/${userCookie.id}/dashboard`} />
                            }
                        />

                        <Route
                            path='/users/:id/dashboard'
                            element={
                                isLoggedIn
                                    ? <Dashboard userData={userCookie} />
                                    : (
                                        <Navigate
                                            to={{
                                                pathname: '/login',
                                                state: { from: '/users/:id/dashboard' }
                                            }}
                                        />
                                    )
                            }
                        />


                        <Route path='/checkout' element={<Checkout />} />

                        <Route path='/thankyou' element={ThankYou} />

                        <Route path='/cause/:id' element={<CauseDetail />} />

                        <Route
                            path='/causes/new'
                            element={
                                isLoggedIn
                                    ? <CauseForm />
                                    : <Navigate to={{ pathname: '/login', state: { from: '/causes/new' } }} />
                            }
                        />

                        <Route path='/causes' element={CauseList} />

                        <Route path='/organizations/new' element={NewOrgForm} />

                        <Route path='/organizations/:id' element={Organization} />

                        <Route
                            path='/'
                            element={
                                !isLoggedIn
                                    ? <Splash />
                                    : <Navigate to={{ pathname: `/users/${userCookie.id}/dashboard` }} />
                            }
                        />

                        <Route path="*" element={Error404} />

                    </Router>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Routes;
