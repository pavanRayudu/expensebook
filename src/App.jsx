import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ExpenseList />
    </div>
  )
}

export default App;