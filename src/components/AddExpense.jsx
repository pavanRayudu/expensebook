import React, { useContext, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import ExpenseContext from './context/ExpenseContext';

const INITIAL_DATA = { expenseDate: "", expenseType: "food", expenseName: "", expenseAmount: 0 }

const AddExpense = ({ handleModal }) => {
    const { addExpense } = useContext(ExpenseContext);
    const [formData, setFormData] = useState(INITIAL_DATA)

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function getExpenseId() {
        return new Date().getMilliseconds();
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addExpense({ expenseId: getExpenseId(), ...formData })
        setFormData(INITIAL_DATA)
        handleModal(false)
    }

    return (
        <div className='add-expense-modal'>
            <div className='expense-form'>
                <IoIosClose id='close-btn' onClick={() => handleModal(false)} />
                <form onSubmit={handleFormSubmit}>
                    <div className="input-field">
                        <label htmlFor="expense-type">Expense type: </label>
                        <select
                            value={formData.expenseType}
                            name="expenseType"
                            id="expense-type"
                            onChange={handleChange}>

                            <option value="travel">Travel</option>
                            <option value="food">Food</option>
                            <option value="groceries">Groceries</option>
                            <option value="investment">Investment</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="expense-name">Expense for... </label>
                        <input
                            value={formData.expenseName}
                            name="expenseName"
                            onChange={handleChange}
                            type="text"
                            id='expense-name'
                            placeholder='Groceries...'
                            required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="expense-amount">Expense amount... </label>
                        <input
                            value={formData.expenseAmount}
                            name='expenseAmount'
                            onChange={handleChange}
                            type="number"
                            placeholder='234'
                            id='expense-amount'
                            required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="expense-date">spent on </label>
                        <input
                            value={formData.expenseDate}
                            name='expenseDate'
                            onChange={handleChange}
                            type="date"
                            id='expense-date'
                            required />
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddExpense
