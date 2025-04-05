import React, { useContext, useMemo } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { getMonth } from '../helpers/getMonth';
import Skeleton from 'react-loading-skeleton';
import { FaArrowCircleDown } from "react-icons/fa";

const MonthSummary = () => {

    const { expenseList, isLoading } = useContext(ExpenseContext);
    const date = new Date()

    const totalExpenseInCurrentMonth = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + ((curValue.expenseType !== "salary" && curValue.expenseType !== "person" && getMonth(curValue.expenseDate) === getMonth(Date())) ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])


    const totalReceivedMoneyInCurrentMonth = useMemo(() =>
        expenseList.reduce(function (accumulator, curValue) {
            return accumulator + (((curValue.expenseType === "salary" || curValue.expenseType === "person") && getMonth(curValue.expenseDate) === getMonth(Date())) ? Number(curValue.expenseAmount) : 0)
        }, 0)
        , [expenseList])

    return (
        <section id='month-summary'>
            {isLoading ? <Skeleton width={100} baseColor="#dbdbdb" highlightColor="gray" /> : <h2>{getMonth(date)},{date.getFullYear()}</h2>}
            {isLoading ? <Skeleton count={2} baseColor="#dbdbdb" highlightColor="gray" /> :
                <div className='amountstatsinCurrMonth'>
                    <span>
                        <FaArrowCircleDown color='green' id="income" />  Rs.{totalReceivedMoneyInCurrentMonth}
                    </span>
                    <span>
                        Bal.
                        Rs.{totalReceivedMoneyInCurrentMonth - totalExpenseInCurrentMonth}
                    </span>
                    <span>
                    Rs.{totalExpenseInCurrentMonth}<FaArrowCircleDown color='red' id="spent"/>  
                    </span>

                </div>}


        </section >
    )
}

export default MonthSummary
