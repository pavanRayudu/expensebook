import React, { useContext, useMemo } from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaCircle } from "react-icons/fa";
import ExpenseContext from '../context/ExpenseContext';

const AmountStatistics = () => {
  const { expenseList } = useContext(ExpenseContext);

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
        <h1 id='total-outgoing-amount' className='income-flow'>
          <FaArrowAltCircleUp id='icon-outgoing' />{totalExpense}</h1>

        <span className='element'> <FaCircle /></span>
        <h2 id='balance-amount'>{totalReceivedMoney - totalExpense}</h2>
        <span className='element'><FaCircle /></span>

        <h1 id='total-incoming-amount' className='income-flow'>
          {totalReceivedMoney} <FaArrowAltCircleDown id='icon-incoming' /></h1>
      </div>
    </section>
  )
}

export default AmountStatistics
