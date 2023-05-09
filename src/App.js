import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.87,
    date: new Date(2022, 2, 28),
  },

  {
    id: "e2",
    title: "Newspaper",
    amount: 56.25,
    date: new Date(2022, 3, 31),
  },

  { id: "e3", title: "Snacks", amount: 100.36, date: new Date(2022, 2, 28) },

  {
    id: "e4",
    title: "Phone Bill",
    amount: 60.25,
    date: new Date(2022, 5, 5),
  },
];

const App = ()=> {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;