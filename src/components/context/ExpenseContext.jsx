import { createContext, useState } from "react";

const ExpenseContext = createContext(null);

export function ExpenseContextProvider({ children }) {
    const data = JSON.parse(window.localStorage.getItem('myExpenseData')) || [];

    const [expenseList, setExpenseList] = useState(data);

    function addExpense(expense) {
        setExpenseList(prevExpenses => [...prevExpenses, expense]);

        if (data) {
            data.push(expense);
            let updatedExpenseData = JSON.stringify(data);
            window.localStorage.setItem('myExpenseData', updatedExpenseData);
        } else {
            let newData = [expense];
            window.localStorage.setItem('myExpenseData', JSON.stringify(newData));
        }
    }

    function removeExpense(item) {
        const updatedExpense = expenseList.filter((expense) => expense.expenseId !== item.expenseId)
        setExpenseList(updatedExpense)
        window.localStorage.setItem('myExpenseData', JSON.stringify(updatedExpense));

    }
    const context = { expenseList, addExpense, removeExpense };

    return <ExpenseContext.Provider value={context}>{children}</ExpenseContext.Provider>
}

export default ExpenseContext;