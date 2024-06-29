import React, { useContext } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import AuthContext from '../context/AuthContext';
import { getDayState } from '../helpers/getDayState';

const InfoSection = () => {
    const { logout } = useContext(AuthContext);

    function handleLogout(e) {
        logout()
    }

    return (
        <section id='info-section'>
            <div id='intro'>
                <h1>{getDayState()}, Venkat!</h1>
            </div>
            <button id='logout-button' onClick={handleLogout}>
                <AiOutlineLogout />
            </button>
        </section>
    )
}

export default InfoSection
