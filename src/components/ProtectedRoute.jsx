import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/login' />
    }
    return (user==='2111') ? children: <Navigate to='/login' />;
}
