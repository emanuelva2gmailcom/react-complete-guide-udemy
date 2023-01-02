import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((element) => (
          <ExpenseItem
            key={element.id}
            title={element.title}
            date={element.date}
            amount={element.amount}
          />
      ))}
    </Card>
  );
}

export default Expenses;
