import React, { useState } from 'react'
import AddExpense from '../AddExpense'
import AddMoney from '../AddMoney';
import { GiExpense } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const ExpenseActions = () => {

  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  return (
    <section id='expense-actions'>
      <button id='add-expense' onClick={() => setShowExpenseModal(true)}>Add Expense </button>
      <button id='add-money' onClick={() => setShowAddMoneyModal(true)}>Add Funds </button>

      {showExpenseModal && <AddExpense closeModal={setShowExpenseModal} />}
      {showAddMoneyModal && <AddMoney handleModal={setShowAddMoneyModal} />}
    </section>
  )
}

export default ExpenseActions
