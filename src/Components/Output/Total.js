import React, { useState, useEffect } from "react";
import classes from "./Total.module.css";

const Total = (props) => {
  const [currentTotal, setTotal] = useState("0.00");

  useEffect(() => {
    if (props.total.people > 0) {
      setTotal(
        (
          (props.total.bill * (1 + props.total.tip)) /
          props.total.people
        ).toFixed(2)
      );
    } else if (props.total.people === "") {
      setTotal("0.00");
    }
  }, [props.total]);

  return (
    <div className={classes.total}>
      <div className={classes.title}>
        <h4 className={classes.total_title}>Total</h4>
        <h4 className={classes.per_person}>/ person</h4>
      </div>
      <div className={classes.total_value}>${currentTotal}</div>
    </div>
  );
};

export default Total;
