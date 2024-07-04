import React, { useContext, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { FaMinus } from "react-icons/fa";
import { month } from '../helpers/getMonth'
import { IoFilter } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { motion } from 'framer-motion';

const INITIAL_VALUES = {
  expenseType: "Category",
  expenseMonth: "month"
}


const ExpenseList = () => {
  const { isLoading, expenseList, removeExpense, filterExpenses, expenseTypes } = useContext(ExpenseContext);
  const [filterOptions, setfilterOptions] = useState(INITIAL_VALUES);
  const [showFilters, setShowFilters] = useState(false)

  function handleDeletion(expense) {
    if (confirm(`Are you sure to delete ${expense.expenseName}?`)) {
      removeExpense(expense);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const newObject = { ...filterOptions, [name]: value };
    setfilterOptions(newObject)
    filterExpenses(newObject)
  }

  function handleClick() {
    setShowFilters(prev => !prev)
    setfilterOptions(INITIAL_VALUES)
    filterExpenses(INITIAL_VALUES)

  }

  return (
    <section id='expenses-list'>
      <div id="filters-section">

        <div className="filters" style={{ display: showFilters ? `flex` : `none` }}>
          <select name="expenseType" id="expenseType" value={filterOptions.expenseType} onChange={handleChange}>
            <option value="Category">Category</option>
            {
              expenseTypes.map(type => <option key={type} value={type}>{type}</option>)
            }
          </select>
          <select name="expenseMonth" id="expenseMonth" value={filterOptions.expenseMonth} onChange={handleChange}>
            <option value="month" >Month</option>
            {
              month.map((month) => <option key={month} value={month}>{month}</option>)
            }
          </select>
        </div>
        <button id='filter-button' onClick={handleClick}>{!showFilters ? <span>Filter <IoFilter /> </span> : <ImCancelCircle />}</button>
      </div>
      {isLoading ? <div id='loading-div'><span>Loading data...</span></div> : <motion.ul 
transition ={staggerChildren: 0.05}

className="expense-list">
        {
          expenseList.map((expense) => {
            return (expense.expenseId ?
              <motion.li
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className='expense-item'
                key={`${expense.expenseId} + ${expense.expenseName}`}
              >
                <button className='delete-expense' onClick={() => handleDeletion(expense)}>
                  <FaMinus />
                </button>
                <div className='expense-details'>
                  <div className="expense-date">
                    <span id='expense-date-month'>{
                      month[new Date(expense.expenseDate).getUTCMonth()].substring(0, 3)
                    }</span>
                    <span id='expense-date-day'>{new Date(expense.expenseDate).getDate()}</span>
                    <span id='expense-date-year'>{new Date(expense.expenseDate).getFullYear()}</span>
                  </div>
                  <div className="expense-description">
                    <span className="expense-category">{expense.expenseType}</span>
                    <p className='expense-name'>{expense.expenseName}</p>
                  </div>

                </div>

                <div className="expense-amount" id={expense.expenseType}>
                  <span>Rs.{expense.expenseAmount}/-</span>
                </div>
              </motion.li> : <></>
            )
          })
        }

      </motion.ul>}
    </section>
  )
}

export default ExpenseList
