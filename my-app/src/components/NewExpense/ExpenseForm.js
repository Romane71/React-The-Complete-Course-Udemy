import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" step="2012-12-31" />
      </div>
      <div className="new-expense__actions"></div>
      <button type="Submit" Add Expense></button>
    </form>
  );
};

export default ExpenseForm;
