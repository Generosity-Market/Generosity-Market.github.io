import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import './RouteTransitions.css';

import {
    Routes as Router,
    Route,
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

import ProtectedRoute from './ProtectedRoute';
import RedirectRoute from './RedirectRoute';

const Routes = React.memo(({
    user,
    token,
}) => {
    const location = useLocation();

    const isLoggedIn = !!user && !!token;

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <Suspense fallback={null}>
                    <Router>

                        <Route
                            path='/login'
                            element={
                                <RedirectRoute
                                    redirectIf={isLoggedIn}
                                    to={`/users/${user?.id}/dashboard`}
                                >
                                    <Login />
                                </RedirectRoute>
                            }
                        />

                        <Route
                            path='/users/:id/dashboard'
                            element={
                                <ProtectedRoute>
                                    <Dashboard userData={user} />
                                </ProtectedRoute>
                            }
                        />

                        <Route path='/checkout' element={<Checkout />} />

                        <Route path='/thankyou' element={<ThankYou />} />

                        <Route path='/cause/:id' element={<CauseDetail />} />

                        <Route
                            path='/causes/new'
                            element={
                                <ProtectedRoute>
                                    <CauseForm />
                                </ProtectedRoute>
                            }
                        />

                        <Route path='/causes' element={<CauseList />} />

                        <Route path='/organizations/new' element={<NewOrgForm />} />

                        <Route path='/organizations/:id' element={<Organization />} />

                        <Route
                            path='/'
                            element={
                                <RedirectRoute
                                    redirectIf={isLoggedIn}
                                    to={`/users/${user?.id}/dashboard`}
                                >
                                    <Splash />
                                </RedirectRoute>
                            }
                        />

                        <Route path="*" element={<Error404 />} />

                    </Router>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    );
});

Routes.displayName = 'Routes';

const mapStateToProps = ({ user, token }) => ({ user, token });

const mapDispatchToProps = {
    // loadTokenFromCookie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
