import { ExpenseContextProvider } from "./components/context/ExpenseContext";
import { useState } from 'react';
import LinksSection from "./components/sections/LinksSection";
import ExpenseList from "./components/sections/ExpenseList";
import AmountStatiscs from "./components/sections/AmountStatistics";
import ExpenseActions from "./components/sections/ExpenseActions";
import InfoSection from "./components/sections/InfoSection";

const App = () => {

  return (
    <ExpenseContextProvider>
      <main className="app">
        <InfoSection />
        <AmountStatiscs />
        {/* <ExpenseActions /> */}
        <ExpenseList />
        <LinksSection />

      </main>
      
    </ExpenseContextProvider>
  )
}

export default App;
