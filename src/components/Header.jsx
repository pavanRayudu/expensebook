import React, { useState } from 'react'
import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';
import AddMoney from './AddMoney';

const Header = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);

  function getDayState() {
    let state = "Morning";
       const now = new Date().getHours();
       if(now >= 12 && now <= 16) {
         state = "Afternoon";
       } else if(now > 16 && now < 24) {
         state = "Evening";
       }
    return state;
  }
  
  return (
    <div className='header'>
      <h1 id='greeting'>Good {getDayState()}, Venkat!</h1>
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
