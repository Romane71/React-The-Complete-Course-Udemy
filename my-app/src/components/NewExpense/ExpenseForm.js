import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    EnteredTitle: "",
    setEnteredAmount: "",
    setEnteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      EnteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      setEnteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      setEnteredDate: event.target.value,
    });
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
        <input type="number" min="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          step="2012-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions"></div>
      <button type="Submit" Add Expense></button>
    </form>
  );
};

export default ExpenseForm;
