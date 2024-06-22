import React, { useContext, useMemo } from 'react'
import ExpenseContext from './context/ExpenseContext'
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

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
            return accumulator + ((curValue.expenseType !== ("salary" || "person") && curValue.expenseAmount > 0) ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    return (
        <div className='expense-summary'>
            <div className="expense-total">
                <h2>
                    <span id='amount-spent'><FaArrowAltCircleDown />{totalExpense}</span> -
                    <span id='balance-amount'>{totalReceivedMoney - totalExpense}</span> -
                    <span id='total-amount'>{totalReceivedMoney}<FaArrowAltCircleUp /></span>
                </h2>
            </div>

            <div className="expenses-filter">
                <button onClick={handleClick}>filter <IoFilterSharp /></button>
            </div>

        </div>
    )
}

export default ExpenseSummary
