import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const RedirectRoute = ({
    children,
    redirectIf,
    to,
    state = {},
}) => {

    const navigate = useNavigate();

    useEffect(() => {
        // Redirect them to specified path
        if (redirectIf) {
            navigate(to, { replace: true, state });
        }
    }, [redirectIf]);

    if (redirectIf) {
        return null;
    }

    return children;
};

export default RedirectRoute;