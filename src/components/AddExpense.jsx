import React, { useContext, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import ExpenseContext from './context/ExpenseContext';
import { useAuth } from './context/AuthContext';
import { motion } from 'framer-motion';

const INITIAL_DATA = { expenseDate: "", expenseType: "food", expenseName: "", expenseAmount: 0 }

const AddExpense = ({ closeModal }) => {
    const user = useAuth();
    const { addExpense } = useContext(ExpenseContext);
    const [formData, setFormData] = useState(INITIAL_DATA)

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function getExpenseId() {
        return Math.floor(Date.now());
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addExpense({ expenseId: getExpenseId(), createdBy: user.currentUser, ...formData })
        setFormData(INITIAL_DATA)
        closeModal(false)
    }

    return (
        <div className='add-expense-modal'>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}

                className='expense-form'>
                <IoIosClose id='close-btn' onClick={() => closeModal(false)} />
                <motion.form

                    onSubmit={handleFormSubmit}>
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
                            <option value="bill">Bill</option>
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
                </motion.form>
            </motion.div>
        </div>
    )
}

export default AddExpense
