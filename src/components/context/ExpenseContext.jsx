import { createContext, useState } from "react";
import { DUMMY_EXPENSES_DATA } from '../../DummyData'

const ExpenseContext = createContext(null);

export function ExpenseContextProvider({ children }) {
    const data = window.localStorage.getItem('myExpenseData') ? (JSON.parse(window.localStorage.getItem('myExpenseData'))) : [];


    const [expenseList, setExpenseList] = useState([...DUMMY_EXPENSES_DATA, ...data]);

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
        // const updatedExpense = expenseList.filter((expense) => expense.expenseId !== item.expenseId)

        let isPresent = data.some(expense => expense.expenseId === item.expenseId && expense.expenseName === item.expenseName);
        console.log(isPresent)
        if (isPresent) {
            let updatedData = data.filter((expense) => expense.expenseId !== item.expenseId);
            localStorage.setItem('myExpenseData', JSON.stringify(updatedData));
            setExpenseList([...DUMMY_EXPENSES_DATA, ...updatedData]);
        }




        setExpenseList(updatedExpense)
        window.localStorage.setItem('myExpenseData', JSON.stringify(updatedExpense));

    }
    expenseList.sort((a, b) => {
    // Convert both dates to milliseconds since Unix epoch
    const dateA = new Date(a.expenseDate).getTime();
    const dateB = new Date(b.expenseDate).getTime();

    // Compare the dates
    if (dateA < dateB) {
        return -1;
    }
    if (dateA > dateB) {
        return 1;
    }
    return 0;
});

    const context = { expenseList, addExpense, removeExpense };

    return <ExpenseContext.Provider value={context}>{children}</ExpenseContext.Provider>
}

export default ExpenseContext;
