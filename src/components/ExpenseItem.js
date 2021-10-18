import "./ExpenseItem.css";

function ExpenseItem() {
  // Built-in JS date
  const expenseDate = new Date(2021, 9, 21);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 230.23;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
