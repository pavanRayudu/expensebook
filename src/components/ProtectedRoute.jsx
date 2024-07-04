import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export const ProtectedRoute = ({ children }) => {
    const auth = useAuth()

    return (auth.currentUser === undefined) ? <Navigate to='/login' /> : children
}