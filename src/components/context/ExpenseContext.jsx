import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { get, ref, remove, getDatabase } from 'firebase/database'
import { firebaseDb } from "../../dbConfig";

const ExpenseContext = createContext(null);
const url = "https://expense-book-dd36d-default-rtdb.firebaseio.com/expenses.json"

export function ExpenseContextProvider({ children }) {
    const [data, setData] = useState({});
    const [expenseList, setExpenseList] = useState([]);

    useEffect(() => {
        fetchData()
    }, [expenseList])

    async function fetchData() {
        const expenseRef = await ref(firebaseDb,'expenses');
        get(expenseRef).then((snapshot) => {
            if(snapshot.exists()){
                setData(snapshot.val())
                const expenseArray = Object.values(snapshot.val())
                setExpenseList(expenseArray)
            }
        })
    }

    async function addExpense(expense) {
        setExpenseList(prev => [...prev, expense])
        axios.post(url, expense)
    }

    function removeExpense(item) {
        const findKeyByValue = (obj, targetValue) => {
            const entry = Object.entries(obj).find(([key, nestedObj]) => nestedObj.expenseId === targetValue);
            return entry ? entry[0] : undefined;
        };

        const key = findKeyByValue(data, item.expenseId);
        const itemRef = ref(firebaseDb, `expenses/${key}`); 

        remove(itemRef)

        const updatedExpense = expenseList.filter((expense) => expense.expenseId !== item.expenseId);
        setExpenseList(updatedExpense)
    }
    
    expenseList.sort((a, b) => {
        const dateA = new Date(a.expenseDate).getTime();
        const dateB = new Date(b.expenseDate).getTime();

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
