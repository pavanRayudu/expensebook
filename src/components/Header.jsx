import React, { useState } from 'react'
import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';
import AddMoney from './AddMoney';

const Header = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);

  return (
    <div className='header'>
      <h1 id='greeting'>Good Evening, Venkat!</h1>
      <div className='button-group'>
        <button id='add-money-btn' onClick={() => setShowAddMoneyModal(true)}>Add Money</button>
        <button id='add-expense-btn' onClick={() => setShowExpenseModal(true)}>Add Expense</button>
      </div>

      {showExpenseModal && <AddExpense handleModal={setShowExpenseModal} />}
      {showAddMoneyModal && <AddMoney handleModal={setShowAddMoneyModal} />}
      <ExpenseSummary />
    </div>
  )
}

export default Header;
