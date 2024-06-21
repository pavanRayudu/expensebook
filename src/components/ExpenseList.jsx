import React from 'react'
import { DUMMY_EXPENSES_DATA } from '../DummyData'
const ExpenseList = () => {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className='expense-container'>
            <ul className='expense-list'>
                {
                    DUMMY_EXPENSES_DATA.map((expense) => {
                        return (
                            <li className='expense-item' key={expense.expenseId}>
                                <div className='expense-details'>
                                    <div className="expense-date">
                                        <span id='expense-date-month'>{
                                            month[new Date(expense.expenseDate).getUTCMonth()]
                                        }</span>
                                        <span id='expense-date-day'>{new Date(expense.expenseDate).getDate()}</span>
                                        <span id='expense-date-year'>{new Date(expense.expenseDate).getFullYear()}</span>
                                    </div>
                                    <div className="expense-description">
                                        <span className="expense-category">{expense.expenseType}</span>
                                        <p className='expense-name'>{expense.expenseName}</p>
                                    </div>

                                </div>

                                <div className="expense-amount">
                                    <span>Rs.{expense.expenseAmount}/-</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ExpenseList
