// Specific card look
// Card – some kind of container look with rounded corners, drop shadows, etc. that holds data
// Composing ExpenseItem component by using card as a wrapper, by using some built-in HTML - JSX
// and then putting everything in the ExpenseDate. And all these components and elements are composed together // to form the overall ExpenseItem component which then is used is in other components to in the end overall.
// build the overall UI.
import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
