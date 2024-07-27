import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { motion } from 'framer-motion';
import { FaMinus } from "react-icons/fa";
import { month } from '../helpers/getMonth'

const RecentTransactions = () => {
    const { expenseList } = useContext(ExpenseContext);

    console.log(expenseList.slice(0, 5))

    return (
        <section id='recent-transaction-list'>
            {
                expenseList.slice(0, 6).map((expense) => {
                    return (
                        <motion.li
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            exit={{ x: 50 }}
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
                        </motion.li>
                    )
                })
            }

        </section>
    )
}

export default RecentTransactions
