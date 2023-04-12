import "./Expenses.css";

function Expenses() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$300</div>
      </div>
    </div>
  );
}
export default Expenses;
