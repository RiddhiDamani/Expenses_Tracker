import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Built-in JS date
  // const expenseDate = new Date(2021, 9, 21);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 230.23;

  const clickHandler = () => {
    console.log("Clicked!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
