import React, { useContext, useMemo, useState } from 'react'
import ExpenseContext from './context/ExpenseContext'
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import SortingOptions from './SortingOptions';
import { ImCancelCircle } from "react-icons/im";

const ExpenseSummary = () => {
    const [showSortOptions, setShowSortOptions] = useState(false);

    const { expenseList } = useContext(ExpenseContext);

    function handleClick() {
        setShowSortOptions(prev => !prev)
    }

    const totalReceivedMoney = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + ((curValue.expenseType === "salary" || curValue.expenseType === "person") ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    const totalExpense = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + ((curValue.expenseType !== "salary" && curValue.expenseType !== "person") ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    return (
        <div className='expense-summary'>
            <div className="wrapper">
                <div className="expense-total">
                    <h2>
                        <span id='amount-spent'><FaArrowAltCircleDown className="outgoing-icon" />{totalExpense}</span> -
                        <span id='balance-amount'>{totalReceivedMoney - totalExpense}</span> -
                        <span id='total-amount'>{totalReceivedMoney}<FaArrowAltCircleUp className="incoming-icon" /></span>
                    </h2>
                </div>

                <div className="expenses-filter">
                    <button onClick={handleClick}>
                        {showSortOptions ? <ImCancelCircle /> : <IoFilterSharp />}
                    </button>
                </div>

            </div>
            <SortingOptions show={showSortOptions} />
        </div>
    )
}

export default ExpenseSummary
