import { ExpenseContextProvider } from "./components/context/ExpenseContext";
import { useState } from 'react';

import ExpenseList from "./components/sections/ExpenseList";
import AmountStatiscs from "./components/sections/AmountStatistics";
import ExpenseActions from "./components/sections/ExpenseActions";
import InfoSection from "./components/sections/InfoSection";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <ExpenseContextProvider>
      <main className="app">
        <InfoSection />
        <AmountStatiscs />
        <ExpenseList />
        <ExpenseActions />
      </main>
    </ExpenseContextProvider>
  )
}

export default App;
