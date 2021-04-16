import React, { useState } from "react";
import "./FormExpense.css";

const FormExpense = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    date: new Date(),
  });
  const [showForm, setShowForm] = useState(false);

  const toggleClickHandler = () => {
    console.log("toggleClickHandler");
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const ChangeHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSave(formData);
    setFormData({
      title: "",
      amount: 0,
      date: new Date(),
    }); //clean Form
    setShowForm(false);
  };
  if (showForm) {
    return (
      <div className="">
        <button type="botton" onClick={toggleClickHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={ChangeHandler}
            value={formData.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={ChangeHandler}
            value={formData.amount}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={ChangeHandler}
            value={formData.date}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="botton" onClick={toggleClickHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default FormExpense;
