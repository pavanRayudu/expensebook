import React, { useContext } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { getDayState } from '../helpers/getDayState';
import { auth } from '../../dbConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const InfoSection = () => {
    const navigate = useNavigate()

    async function handleLogout() {
        await signOut(auth)
        window.localStorage.setItem('data', null);
        navigate('/login')
    }

    return (
        <section id='info-section'>
            <div id='intro'>
                <h1>{getDayState()}</h1>
            </div>
            <button id='logout-button' onClick={handleLogout}>
                <AiOutlineLogout />
            </button>
        </section>
    )
}

export default InfoSection
