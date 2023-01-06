import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const expenses = [
    { id: '1', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '2', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '3', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '4', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
