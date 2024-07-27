import { ExpenseContextProvider } from "./components/context/ExpenseContext";
import { useState } from 'react';
import LinksSection from "./components/sections/LinksSection";
import ExpenseList from "./components/sections/ExpenseList";
import AmountStatiscs from "./components/sections/AmountStatistics";
import ExpenseActions from "./components/sections/ExpenseActions";
import InfoSection from "./components/sections/InfoSection";
import RecentTransactions from "./components/sections/RecentTransactions";

const App = () => {

  return (
    <ExpenseContextProvider>
      <main className="app">
        <InfoSection />
        <AmountStatiscs />
        <RecentTransactions />
        <ExpenseActions />
        {/* <ExpenseList /> */}
      </main>
    </ExpenseContextProvider>
  )
}

export default App;
