import React, { useContext, useEffect, useState } from 'react'
import ExpenseContext from './context/ExpenseContext';
import { FaMinus } from "react-icons/fa";

const ExpenseList = () => {
    const { expenseList, removeExpense } = useContext(ExpenseContext);
    const [expList, setExpList] = useState(expenseList);
    
<<<<<<< HEAD
    // useEffect(() => {
    //     setExpList(expenseList)
    //     
    // }, [expenseList])

    // const ls = expenseList.filter((item) => item.productId === 889);
    //     console.log(ls)
=======
    useEffect(() => {
        setExpList(expenseList)
    }, [expenseList])
>>>>>>> a5c2c47ba60c69b8c3f7fcafb3f3a5f20dcc599d

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    function handleDeletion(expense){
        if(confirm(`Are you sure to delete ${expense.expenseName}?`)){
            removeExpense(expense);
        }
    }
    
    return (
        <div className='expense-container'>

            <ul className='expense-list'>
                {
                    expenseList.map((expense) => {
                        return (expense.expenseId ?
                            <li className='expense-item' key={`${expense.expenseId} + ${expense.expenseName}`}>
                                <button className='delete-expense' onClick={() => handleDeletion(expense)}>
                                    <FaMinus />
                                </button>
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

                                <div className="expense-amount" id={expense.expenseType}>
                                    <span>Rs.{expense.expenseAmount}/-</span>
                                </div>
                            </li> : <></>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ExpenseList
