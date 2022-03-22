import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let calcBarFillHeight = "0%";

  if (props.maxValue > 0) {
    calcBarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: calcBarFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.monthLabel}</div>
    </div>
  );
};

export default ChartBar;
