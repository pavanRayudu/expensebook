import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Header from "./components/Header";
import { ExpenseContextProvider } from "./components/context/ExpenseContext";
import {useState} from 'react';

const App = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <ExpenseContextProvider>
      <div className="app">
        
        {isLoggedIn && <main>
          <Header />
          <ExpenseList />
        </main>}
        <div className="element"></div>
      </div>
    </ExpenseContextProvider>
  )
}

export default App;
