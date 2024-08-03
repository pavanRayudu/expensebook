import React, { useContext, useState } from 'react'
import AddExpense from '../AddExpense'
import AddMoney from '../AddMoney';
import ExpenseContext from '../context/ExpenseContext';
import Skeleton from 'react-loading-skeleton';

const ExpenseActions = () => {
  const { isLoading } = useContext(ExpenseContext)
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  return (
    <section id='expense-actions'>
      {
        isLoading ? <Skeleton
          baseColor='#1c519d'
          borderRadius={50}
          width={150}
          height={35}
        /> :
          <button id='add-expense' onClick={() => setShowExpenseModal(true)}>+ Expense </button>
      }
      {
        isLoading ? <Skeleton
          baseColor='gray'
          borderRadius={50}
          width={150}
          height={35}
        /> :
          <button id='add-money' onClick={() => setShowAddMoneyModal(true)}>+ Funds </button>
      }

      {showExpenseModal && <AddExpense closeModal={setShowExpenseModal} />}
      {showAddMoneyModal && <AddMoney handleModal={setShowAddMoneyModal} />}
    </section>
  )
}

export default ExpenseActions
