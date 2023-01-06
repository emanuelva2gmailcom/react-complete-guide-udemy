import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selected) => {
    setFilteredYear(selected);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.expenses.map((element) => (
          <ExpenseItem
            key={element.id}
            title={element.title}
            date={element.date}
            amount={element.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
