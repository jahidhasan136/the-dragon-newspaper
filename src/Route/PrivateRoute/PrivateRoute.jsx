import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    const location = useLocation()

    if (loader) {
        return <Spinner animation="border" variant="secondary" />
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;