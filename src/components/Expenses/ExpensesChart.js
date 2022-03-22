import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { monthLabel: "Jan", value: 0 },
    { monthLabel: "Feb", value: 0 },
    { monthLabel: "Mar", value: 0 },
    { monthLabel: "Apr", value: 0 },
    { monthLabel: "May", value: 0 },
    { monthLabel: "Jun", value: 0 },
    { monthLabel: "Jul", value: 0 },
    { monthLabel: "Aug", value: 0 },
    { monthLabel: "Sept", value: 0 },
    { monthLabel: "Oct", value: 0 },
    { monthLabel: "Nov", value: 0 },
    { monthLabel: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;