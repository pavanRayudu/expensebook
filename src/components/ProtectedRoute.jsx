import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { Navigate } from 'react-router-dom';
import { auth } from '../dbConfig';

export const ProtectedRoute = ({ children }) => {

    if (!auth.currentUser.email) {
        return <Navigate to='/login' />
    }
    return children;
}
