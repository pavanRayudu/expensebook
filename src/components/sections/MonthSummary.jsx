import React, { useContext, useMemo } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { getMonth } from '../helpers/getMonth';
import Skeleton from 'react-loading-skeleton';

const MonthSummary = () => {

    const { expenseList, isLoading } = useContext(ExpenseContext);

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



            {isLoading ? <Skeleton width={100} baseColor="#dbdbdb" highlightColor="gray" /> : <h2>This month</h2>}
            {isLoading ? <Skeleton count={2} baseColor="#dbdbdb" highlightColor="gray" /> : <div>
                <p>You have earned  <span id='income'>Rs.{totalReceivedMoneyInCurrentMonth}
                </span> and Spent <span id='spent'>Rs.{totalExpenseInCurrentMonth}</span>
</p>
</div>


        </section>
    )
}

export default MonthSummary
