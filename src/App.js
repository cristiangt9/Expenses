import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expensesInitial = [
  {
    id: 3,
    date: new Date(2021, 0, 28),
    title: "Boat insurance",
    amount: 994.67,
  },
  {
    id: 2,
    date: new Date(2021, 2, 30),
    title: "House insurance",
    amount: 594.67,
  },
  {
    id: 1,
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: 294.67,
  },
  
];
const App = () => {
  const [expenses, setExpenses] = useState(expensesInitial);
  const saveHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      const lastId = prevExpenses[0]?.id ?? 0;
      newExpense = {
        ...newExpense,
        date: new Date(newExpense.date),
        id: lastId + 1,
      };
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <h2 className="title">Expenses</h2>
      <NewExpense onSave={saveHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
