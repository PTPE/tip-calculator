import Bill from "./Bill";
import NumberOfPeople from "./NumberOfPeople";
import SelectedTip from "./SelectedTip";
import classes from "./InputAll.module.css";

const InputAll = (props) => {
  return (
    <div className={classes.input_all}>
      <div className={classes.bill}>
        <Bill onBill={props.onBill} updateData={props.updateData} />
      </div>
      <div className={classes.selected_tip}>
        <SelectedTip
          onTip={props.onTip}
          updateData={props.updateData}
          onInputTipState={props.onInputTipState}
          onTipState={props.onTipState}
        />
      </div>
      <div className={classes.number_of_people}>
        <NumberOfPeople
          onPeople={props.onPeople}
          updateData={props.updateData}
          onSetWarning={props.onSetWarning}
          onClickWarning={props.onClickWarning}
          onPeopleFocus={props.onPeopleFocus}
        />
      </div>
    </div>
  );
};

export default InputAll;
