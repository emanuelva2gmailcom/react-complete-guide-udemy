import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onCancelHandler = () => setShowForm(false);

  const startEditingHandler = () => setShowForm(true);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onCancel={onCancelHandler}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Show Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
