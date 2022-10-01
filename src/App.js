import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import InputAll from "./Components/Input/InputAll";
import OutputAll from "./Components/Output/OutputAll";

function App() {
  const initialTipState = [false, false, false, false, false, false];
  const initialData = { bill: "", tip: "", people: "" };
  const [allData, setData] = useState(initialData);
  const [enteredBill, setEnteredBill] = useState("");
  const [enteredPeople, setEnteredPeople] = useState("");
  const [enteredTip, setEnteredTip] = useState("");
  const [tipState, setTipState] = useState(initialTipState);
  const [peopleFocus, setPeopleFocus] = useState(false);
  const [warning, setWarning] = useState(false);

  const inputBill = (inputBill) => {
    inputBill >= 0 && setEnteredBill(inputBill);
  };

  const inputTip = (inputTip) => {
    inputTip >= 0 && setEnteredTip(inputTip);
  };

  const inputPeople = (inputPeople) => {
    inputPeople >= 0 && setEnteredPeople(inputPeople);
  };

  const reset = () => {
    setEnteredBill("");
    setEnteredTip("");
    setEnteredPeople("");
    setTipState(initialTipState);
    setWarning(false);
    setPeopleFocus(false);
  };

  const clickWarning = () => {
    if (peopleFocus) {
      if (enteredPeople === "0" || enteredPeople === "") setWarning(true);
      else if (enteredPeople > 0) setWarning(false);
    } else setWarning(false);
  };

  console.log(peopleFocus);

  const peopleFocusHandler = () => {
    setPeopleFocus(true);
  };

  const inputTipState = (inputTipState) => {
    setTipState(inputTipState);
  };

  console.log(warning);

  useEffect(() => {
    const allData = {
      bill: enteredBill,
      tip: enteredTip,
      people: enteredPeople,
    };

    setData(allData);
  }, [enteredBill, enteredTip, enteredPeople]);

  return (
    <div className={classes.container}>
      <div className={classes.data_input}>
        <InputAll
          onBill={inputBill}
          onTip={inputTip}
          onPeople={inputPeople}
          onInputTipState={inputTipState}
          updateData={allData}
          onSetWarning={warning}
          onClickWarning={clickWarning}
          onTipState={tipState}
          onPeopleFocus={peopleFocusHandler}
        />
      </div>
      <div className={classes.data_output}>
        <OutputAll OutputAllData={allData} onReset={reset} />
      </div>
    </div>
  );
}

export default App;
