import React, { useContext, useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { getDayState } from '../helpers/getDayState';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Skeleton from 'react-loading-skeleton';
import ExpenseContext from '../context/ExpenseContext';

const InfoSection = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    let name = auth?.username;
    const { isLoading, setExpenseList, expenseList } = useContext(ExpenseContext)

    function handleLogout() {
        auth.logOut()
            .then(res => navigate('/login'))
            .catch(err => console.error(err))
    }

    return (
        <section id='info-section'>
            <div id='intro'>
                {
                    isLoading ? <Skeleton baseColor='gray' width={180} height={30} /> : <h1>{getDayState()}, {name ? ((name).trim().split(" "))[0] : " "}</h1>
                }
            </div>
            {isLoading ? <Skeleton baseColor='gray' width={30} height={30} /> : <button id='logout-button' onClick={handleLogout}>
                <AiOutlineLogout />
            </button>}
        </section>
    )
}

export default InfoSection