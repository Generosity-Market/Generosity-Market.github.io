import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ user, token, children }) => {

    const location = useLocation();

    const isLoggedIn = !!user && !!token;

    if (!isLoggedIn) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate
                replace
                to="/login"
                state={{ from: location }}
            />
        );
    }

    return children;
};

const mapStateToProps = ({ user, token }) => ({ user, token });

export default connect(mapStateToProps)(ProtectedRoute);