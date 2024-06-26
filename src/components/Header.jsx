import React, { useState } from 'react'
import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';
import AddMoney from './AddMoney';

const Header = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);

  function getDayState() {
    let state = "Good Morning";
       const now = new Date().getHours();
       if(now >= 12 && now < 16) {
         state = "Good Afternoon";
       } else if(now > 16 && now < 24) {
         state = "Good Evening";
       } else if(now > 22 || now< 5) {
         state = "Please sleep 🙏";
       }
    return state;
  }
  
  return (
    <div className='header'>
      <h1 id='greeting'>{getDayState()}, Venkat!</h1>
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
