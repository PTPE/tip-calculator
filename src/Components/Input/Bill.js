import IconCash from "../../images/icon-dollar.svg";
import classes from "./Bill.module.css";

const Bill = (props) => {
  return (
    <div className={classes.bill}>
      <label>Bill</label>
      <img src={IconCash} className={classes.cash_icon} />
      <input
        className={classes.bill_input}
        type="number"
        placeholder="0"
        onChange={(event) => props.onBill(event.target.value)}
        value={props.updateData.bill}
      ></input>
    </div>
  );
};

export default Bill;
