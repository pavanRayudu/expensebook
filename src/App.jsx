import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Header from "./components/Header";
import { ExpenseContextProvider } from "./components/context/ExpenseContext";

const App = () => {
  return (

    <ExpenseContextProvider>
      <div className="app">
        <Header />
        <ExpenseList />
        <div className="element"></div>
      </div>
    </ExpenseContextProvider>

  )
}

export default App;