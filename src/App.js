import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: '1', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '2', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '3', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
    { id: '4', title: "Car Insurance", amount: 325.65, date: new Date(2022, 10, 31) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
