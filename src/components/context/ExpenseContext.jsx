import { createContext, useEffect, useState } from "react";
import { get, ref, push, remove, set, query, equalTo, orderByChild } from 'firebase/database'
import { firebaseDb } from "../../dbConfig";
import { getMonth } from '../helpers/getMonth'
import { auth } from "../../dbConfig";
const ExpenseContext = createContext(null);

export function ExpenseContextProvider({ children }) {
    const [data, setData] = useState({});
    const [expenseList, setExpenseList] = useState([]);
    const [expenseList2, setExpenseList2] = useState([]);
    const [error, setError] = useState("");
    const expenseTypes = Array.from(new Set(expenseList.map(expense => expense.expenseType)))


    useEffect(() => {
        fetchData()
    }, [])



    //fetching the expenses data from database
    async function fetchData() {
        const user = auth.currentUser;

        if (user) {
            try {
                const expenseRef = ref(firebaseDb, 'expenses');
                const propertyQuery = query(expenseRef, orderByChild("createdBy"), equalTo(user.email));
                await get(propertyQuery).then((snapshot) => {
                    if (snapshot.exists()) {
                        setData(snapshot.val())
                        const expenseArray = Object.values(snapshot.val())
                        setExpenseList(expenseArray)
                        setExpenseList2(expenseArray)
                    }
                })
            } catch (err) {
                console.log(err.message)
            }

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

        if (dateA > dateB) {
            return -1;
        }
        if (dateA < dateB) {
            return 1;
        }
        return 0;
    });

    function filterExpenses(filters) {
        let filterByCategory = [];
        let filterByMonth = [];

        if (filters.expenseType === "Category") {
            filterByCategory = [...expenseList];
        } else {
            filterByCategory = expenseList.filter((exp) => (
                exp.expenseType === filters.expenseType
            ))
        }

        if (filters.expenseMonth === "month") {
            filterByMonth = [...filterByCategory];
        } else {
            filterByMonth = filterByCategory.filter((exp) => (
                getMonth(exp.expenseDate) === filters.expenseMonth
            ))
        }

        setExpenseList2(filterByMonth)
    }

    const context = {
        expenseList: expenseList2,
        addExpense,
        removeExpense,
        filterExpenses,
        expenseTypes,
    };

    return <ExpenseContext.Provider value={context}>{children}</ExpenseContext.Provider>
}

export default ExpenseContext;
