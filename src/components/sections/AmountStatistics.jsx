import React, { useContext, useMemo } from 'react'
import ExpenseContext from '../context/ExpenseContext';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AmountStatistics = ({month}) => {
  const { expenseList, isLoading } = useContext(ExpenseContext);
 

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
    <section id='amount-stats'>
      <div className='amount-stats-figures'>
        <h1>{month} Summary</h1>
        <h1 id='total-outgoing-amount' className='income-flow'>
          <span>Total Expenditure</span>
          {totalExpense || <Skeleton />} </h1>

        {/* <span className='element'> <FaCircle /></span> */}
        {/* <span className='element'><FaCircle /></span> */}

        <h1 id='total-incoming-amount' className='income-flow'>
          <span>Total Earnings</span>
          {totalReceivedMoney} </h1>
        <hr />
        <h1 id='balance-amount'><span>Balance</span>{totalReceivedMoney - totalExpense}</h1>

      </div>
      {/* <ExpenseActions /> */}
    </section>
  )
}

export default AmountStatistics
