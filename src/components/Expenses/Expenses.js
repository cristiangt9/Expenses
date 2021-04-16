import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState("2021");

  const filterChangeHandler = (event) => {
    setYearFilter(event.target.value);
  };
  const expensesFilters =
    yearFilter === "all"
      ? expenses
      : expenses.filter(
          (expense) => expense.date.getFullYear().toString() === yearFilter
        );

  return (
    <Card className="expenses">
      <ExpensesFilter onChange={filterChangeHandler} selected={yearFilter} />
      <ExpensesList expensesFilters={expensesFilters} />
    </Card>
  );
};
export default Expenses;
