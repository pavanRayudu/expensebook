import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { user } from './helpers/useLocalStorage';

export const ProtectedRoute = ({ children }) => {

    if (user === null) {
        return <Navigate to='/login' />
    }
    return children;
}