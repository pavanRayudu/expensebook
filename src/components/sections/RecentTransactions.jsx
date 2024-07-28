import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { motion } from 'framer-motion';
import { FaMinus } from "react-icons/fa";
import { month } from '../helpers/getMonth'
import empty from '../../../assets/svgs/empty.svg'
import { Link } from 'react-router-dom';


const RecentTransactions = () => {
    const { isLoading, expenseList, removeExpense, filterExpenses, expenseTypes } = useContext(ExpenseContext);

    function handleDeletion(expense) {
        if (confirm(`Are you sure to delete ${expense.expenseName}?`)) {
            removeExpense(expense);
        }
    }

    function handleShowMoreTransactions() {

    }





    return (
        <section id='recent-transaction-list'>
            <span className='transaction label'>Recent transactions</span>

            {isLoading ? <div id='loading-div'><span>Loading data...</span></div> :
                <motion.ul
                    className="expense-list">
                    {expenseList.length > 0 ?
                        expenseList.slice(0, 7).map((expense) => {
                            return (expense.expenseId ?
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
                                </motion.li> : <></>
                            )
                        }) : <div className='empty-list'>

                            <img src={empty} alt="" id='empty-svg' />
                            <h3>No expenses found, Add expense or funds</h3>
                        </div>
                    }
                    <Link to='/transactions'>
                        <span className='transaction show-more' onClick={handleShowMoreTransactions}>view all transactions</span>
                    </Link>

                </motion.ul>}

        </section>
    )
}

export default RecentTransactions
