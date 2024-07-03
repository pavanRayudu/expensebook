import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { Navigate } from 'react-router-dom';
import { auth } from '../dbConfig';

export const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(window.localStorage.getItem("data"));
    console.log(user)


    if (user === null) {
        return <Navigate to='/login' />
    }
    return children;
}
