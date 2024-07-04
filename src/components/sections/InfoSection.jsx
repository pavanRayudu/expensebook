import React, { useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { getDayState } from '../helpers/getDayState';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const InfoSection = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    function handleLogout() {
        auth.logOut()
            .then(res => navigate('/login'))
            .catch(err => console.error(err))
    }

    return (
        <section id='info-section'>
            <div id='intro'>
                <h1>{getDayState()}, {(auth?.currentUser?.substring(0, auth.currentUser.indexOf('@')))
                }</h1>
            </div>
            <button id='logout-button' onClick={handleLogout}>
                <AiOutlineLogout />
            </button>
        </section>
    )
}

export default InfoSection