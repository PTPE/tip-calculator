import React, { useState, useEffect } from "react";
import classes from "./TipAmount.module.css";

const TipAmount = (props) => {
  const [currentTip, setTip] = useState("0.00");

  useEffect(() => {
    if (props.tip.people > 0) {
      setTip(((props.tip.tip * props.tip.bill) / props.tip.people).toFixed(2));
    } else if (props.tip.people === "") {
      setTip("0.00");
    }
  }, [props.tip]);

  return (
    <div className={classes.tip_amount}>
      <div className={classes.title}>
        <h4 className={classes.tip_title}>Tip Amount</h4>
        <h4 className={classes.per_person}>/ person</h4>
      </div>
      <div className={classes.tip_value}>${currentTip}</div>
    </div>
  );
};

export default TipAmount;
