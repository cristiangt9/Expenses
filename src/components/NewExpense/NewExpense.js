import React from "react";
import FormExpense from "./FormExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <FormExpense onSave={props.onSave} />
    </div>
  );
};

export default NewExpense;
