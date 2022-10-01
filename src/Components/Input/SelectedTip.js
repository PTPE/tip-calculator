import { useState, useEffect } from "react";
import classes from "./SelectedTip.module.css";

const SelectedBill = (props) => {
  const tipRate = [5, 10, 15, 25, 50];
  const initialState = [false, false, false, false, false, false];

  const [customTip, setCustomTip] = useState("");
  const [clicked, setclicked] = useState(initialState);
  // const [currentTip, setCurrentTip] = useState("");

  // const tipChangeHandler = (event) => {
  //   setCustomTip(event.target.value);
  //   setCurrentTip(event.target.value);
  // };

  // const tipSubmitHandler = (event) => {
  //   setCurrentTip(event.target.value.slice(0, -1) / 100);
  // };

  const tipFocusHandler = (i) => {
    setclicked(() => {
      const newState = [...initialState];
      newState[i] = true;
      props.onInputTipState(newState);
    });
  };

  const tipCustomHandler = (event) => {
    setclicked(() => {
      const newState = [...initialState];
      newState[5] = true;
      props.onInputTipState(newState);
    });
  };

  return (
    <div className={classes.selected_tip}>
      <label>Selected Tip %</label>
      <div className={classes.tip}>
        {tipRate.map((tip, i) => (
          <input
            key={i}
            className={
              props.onTipState[i]
                ? classes.tip_button_active
                : classes.tip_button
            }
            type="button"
            onClick={(event) => {
              props.onTip(event.target.value.slice(0, -1) / 100);
              tipFocusHandler(i);
            }}
            value={tip + "%"}
          ></input>
        ))}
        <input
          className={classes.tip_input}
          type="number"
          placeholder="Custom"
          onChange={(event) => {
            props.onTip(event.target.value);
            setCustomTip(event.target.value);
          }}
          onClick={tipCustomHandler}
          value={props.onTipState[5] ? customTip : ""}
          // value={customTip}
        ></input>
      </div>
    </div>
  );
};

export default SelectedBill;
