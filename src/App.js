import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 325.65,
    date: new Date("2022-02-31"),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: 32.65,
    date: new Date("2022-12-31"),
  },
  {
    id: "3",
    title: "Car Insurance",
    amount: 325.65,
    date: new Date("2022-10-31"),
  },
  {
    id: "4",
    title: "Car Insurance",
    amount: 3225.65,
    date: new Date("2022-12-31"),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
