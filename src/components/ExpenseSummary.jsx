import React, { useContext, useMemo } from 'react'
import ExpenseContext from './context/ExpenseContext'
import { IoFilterSharp } from "react-icons/io5";

const ExpenseSummary = () => {

    function handleClick(e) {

    }
    const { expenseList } = useContext(ExpenseContext);

    const totalReceivedMoney = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + (curValue.expenseType === ("salary" || "person") ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    const totalExpense = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + (curValue.expenseType !== ("salary" || "person") ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    return (
        <div className='expense-summary'>
            <div className="expense-total">
                <h2><span>{totalExpense}</span>/{totalReceivedMoney}</h2>
                <span><h3>{totalReceivedMoney - totalExpense}</h3></span>
            </div>

            <div className="expenses-filter">
                <button onClick={handleClick}>filter <IoFilterSharp /></button>
            </div>

        </div>
    )
}

export default ExpenseSummary
