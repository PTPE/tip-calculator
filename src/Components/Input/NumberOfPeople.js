import React, { useState, useEffect } from "react";
import classes from "./NumberOfPeople.module.css";
import IconPerson from "../../images/icon-person.svg";

const NumberOfPeople = (props) => {
  // const [click, setClick] = useState(false);
  // const [warning, setWarning] = useState(false);

  // const warningHandler = () => {
  //   props.onClickWarning();
  // };

  useEffect(() => {
    props.onClickWarning();
  }, [props.updateData.people, props.onPeopleFocus]);

  // useEffect(() => {
  //   if (click) {
  //     if (props.updateData.people === "0" || props.updateData.people === "") {
  //       setWarning(true);
  //     } else setWarning(false);
  //   }
  // });
  console.log(props.onSetWarning);

  return (
    <div className={classes.number_of_people}>
      <label>Number of People</label>
      {props.onSetWarning && <p className={classes.warning}>Can't be zero</p>}
      <img src={IconPerson} className={classes.people_icon} />
      <input
        className={
          props.onSetWarning
            ? classes.people_input_warning
            : classes.people_input
        }
        type="number"
        placeholder="0"
        onChange={(event) => {
          props.onPeople(event.target.value);
          // warningHandler();
        }}
        onClick={() => {
          props.onPeopleFocus();
          props.onClickWarning();
        }}
        value={props.updateData.people}
      />
    </div>
  );
};

export default NumberOfPeople;
