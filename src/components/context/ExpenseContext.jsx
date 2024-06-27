import { createContext, useEffect, useState } from "react";
import { get, ref, push, remove, set } from 'firebase/database'
import { firebaseDb } from "../../dbConfig";
import { getMonth } from '../helpers/getMonth'

const ExpenseContext = createContext(null);

export function ExpenseContextProvider({ children }) {
    const [data, setData] = useState({});
    const [expenseList, setExpenseList] = useState([]);
    const [expenseList2, setExpenseList2] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData()
    }, [])


    //fetching the expenses data from database
    async function fetchData() {
        try{
            const expenseRef = ref(firebaseDb, 'expenses');
            await get(expenseRef).then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val())
                    const expenseArray = Object.values(snapshot.val())
                    setExpenseList(expenseArray)
                    setExpenseList2(expenseArray)
                }
            })
        } catch(err) {
            console.log(err.message)
        }
    }

    // Adding new expense
    async function addExpense(expense) {
        setExpenseList(prev => [...prev, expense])
        setExpenseList2(prev => [...prev, expense])

        //adding new expense to database
        const expenseRef = ref(firebaseDb, 'expenses');
        const newExpenseRef = push(expenseRef);
        await set(newExpenseRef, expense)
    }

    //Remove Expense
    async function removeExpense(item) {
        const updatedExpense = expenseList.filter((expense) => expense.expenseId !== item.expenseId);
        setExpenseList(updatedExpense);
        setExpenseList2(updatedExpense);

        //Finding the key of an removing object
        const findKeyByValue = (obj, targetValue) => {
            const entry = Object.entries(obj).find(([key, nestedObj]) => nestedObj.expenseId === targetValue);
            return entry ? entry[0] : undefined;
        };
        const key = findKeyByValue(data, item.expenseId);

        //removing the expense item from database
        const itemRef = ref(firebaseDb, `expenses/${key}`);
        await remove(itemRef);
    }

    //sorting the expenses by date
    expenseList2.sort((a, b) => {
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


    function filterExpensesByCategory(type) {
        if (type === "category") {
            setExpenseList2(expenseList)
        } else {
            const filteredList = expenseList.filter(expense =>
                expense.expenseType === type)
            setExpenseList2(filteredList)
        }
    }
    function filterExpensesByMonth(type) {
        if (type === "month") {
            setExpenseList2(expenseList)
        }
        else {
            const filteredList = expenseList.filter(expense =>
                getMonth(expense.expenseDate) === type)
            setExpenseList2(filteredList)
        }
    }

    const context = { expenseList: expenseList2, addExpense, removeExpense, filterExpensesByMonth, filterExpensesByCategory };

    return <ExpenseContext.Provider value={context}>{children}</ExpenseContext.Provider>
}

export default ExpenseContext;