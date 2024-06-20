import React, { useState } from 'react'
import AddExpense from './AddExpense';

const Header = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  return (
    <div className='header'>
      <h1 id='greeting'>Good Evening, Jack !</h1>
      <div className='button-group'>
        <button id='add-money-btn' onClick={null}>Add Money</button>
        <button id='add-expense-btn' onClick={() => setShowExpenseModal(true)}>Add Expense</button>
      </div>

      {showExpenseModal && <AddExpense handleModal={setShowExpenseModal} />}
    </div>
  )
}

export default Header;
