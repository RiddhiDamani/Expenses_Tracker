import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // first var i.e. title is the pointer to the manaaged variable i.e. props.title - First element is current state value
  // second var is a function which we can later call to set a new title for instance.
  const [title, setTitle] = useState(props.title);
  //let title = props.title;

  const clickHandler = () => {
    //title = "Updated!";
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
