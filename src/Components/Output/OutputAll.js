import TipAmount from "./TipAmount";
import Total from "./Total";
import classes from "./OutputAll.module.css";
import { useState } from "react";

const OutputAll = (props) => {
  const data = props.OutputAllData;

  const isDisabled = data.tip === "" && data.bill === "" && data.people === "";

  return (
    <div className={classes.output_all}>
      <TipAmount className={classes.tip_amount} tip={data} />
      <Total className={classes.total} total={data} />
      <button
        type="button"
        onClick={props.onReset}
        disabled={isDisabled}
        className={isDisabled ? classes.resetFalse : classes.resetTrue}
      >
        RESET
      </button>
    </div>
  );
};

export default OutputAll;
