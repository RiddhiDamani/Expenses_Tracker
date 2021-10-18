import "./ExpenseItem.css";

function ExpenseItem(props) {
  // Built-in JS date
  // const expenseDate = new Date(2021, 9, 21);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 230.23;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
