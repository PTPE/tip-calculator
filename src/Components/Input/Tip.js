import "./Tip.css";

const Tip = (props) => {
  return (
    <div className="tip">
      <div className="btn_top">
        <button type="button">5%</button>
        <button type="button">10%</button>
        <button type="button">15%</button>
      </div>
      <div className="btn_btm">
        <button type="button">25%</button>
        <button type="button">50%</button>
        <input className="tip_input" type="number" placeholder="Custom"></input>
      </div>
    </div>
  );
};

export default Tip;
