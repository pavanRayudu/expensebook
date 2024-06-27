import React, { useContext, useState } from 'react'
import ExpenseContext from './context/ExpenseContext';
import { month } from './helpers/getMonth';


const expenseType = ["category", "food", "investment", "travel", "others", "groceries"]

const SortingOptions = ({ show }) => {
    const { filterExpensesByCategory, filterExpensesByMonth } = useContext(ExpenseContext)

    return (
        <div className={`sorting-section ${show}`}>
            <ul className='sorting-options'>
                <li>
                    <select

                        name="month"
                        id="month"
                        onChange={(e) => filterExpensesByMonth((e.target.value))}
                    >
                        <option value="month">month</option>
                        {month.map((month) => {
                            return <option key={month} value={month}>{month}</option>
                        })}
                    </select>
                </li>
                <li>
                    <select
                        name="expenseCategory"
                        id="expenseCategory"
                        onChange={(e) => filterExpensesByCategory(e.target.value)}
                    >
                        {expenseType.map((type) => {
                            return <option key={type} value={type}>{type}</option>
                        })}
                    </select>
                </li>
            </ul>

        </div>
    )
}

export default SortingOptions
