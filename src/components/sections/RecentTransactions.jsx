import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { motion } from 'framer-motion';
import { FaMinus } from "react-icons/fa";
import { month } from '../helpers/getMonth'
import empty from '../../../assets/svgs/empty.svg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import SkeltonModal from '../helpers/SkeltonModal';
import Skeleton from 'react-loading-skeleton';


const RecentTransactions = () => {
    const { isLoading, expenseList, removeExpense, filterExpenses, expenseTypes } = useContext(ExpenseContext);

    function handleDeletion(expense) {
        if (confirm(`Are you sure to delete ${expense.expenseName}?`)) {
            removeExpense(expense);
        }
    }


    return (
        <section id='recent-transaction-list'>
            {isLoading ? <Skeleton baseColor='gray' width={150} /> : <h3>Recent transactions</h3>}

            {/* {isLoading ? <div id='loading-div'><span>Loading data...</span></div> : */}
            <motion.ul
                className="expense-list">
                {isLoading ? <SkeltonModal /> : ((expenseList.length > 0) ?
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
                    </div>)
                }

                {
                    isLoading ? <Skeleton baseColor='gray' width={150} />
                        :
                        <Link to='/transactions' className='show-all-transactions-link'>
                            <span className='transaction show-more'>View all transactions <FaArrowRight /></span>
                        </Link>
                }

            </motion.ul>

        </section>
    )
}

export default RecentTransactions
