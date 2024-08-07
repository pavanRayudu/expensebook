import React, { useContext, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import ExpenseContext from './context/ExpenseContext';
import { useAuth } from './context/AuthContext';
import { motion } from 'framer-motion';

const INITIAL_DATA = { expenseDate: "", expenseType: "salary", expenseName: "", expenseAmount: 0 }

const AddMoney = ({ handleModal }) => {
    const { addExpense } = useContext(ExpenseContext);
    const [formData, setFormData] = useState(INITIAL_DATA)
    const user = useAuth();

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
        handleModal(false)
    }

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='add-expense-modal'>
            <div className='expense-form'>
                <IoIosClose id='close-btn' onClick={() => handleModal(false)} />
                <form onSubmit={handleFormSubmit}>
                    <div className="input-field">
                        <select
                            value={formData.expenseType}
                            name="expenseType"
                            id="expense-type"
                            onChange={handleChange}>

                            <option value="salary">Salary</option>
                            <option value="person">Person</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="expense-name">Amount Received from... </label>
                        <input
                            value={formData.expenseName}
                            name="expenseName"
                            onChange={handleChange}
                            type="text"
                            id='expense-name'
                            placeholder='e.g krishna '
                            required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="expense-amount">Amount received... </label>
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
                        <label htmlFor="expense-date">Received on </label>
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
        </motion.div>
    )
}

export default AddMoney;