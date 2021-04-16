import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesList.css";

const ExpensesList = ({ expensesFilters }) => {
  if (expensesFilters.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>;
  }
  return (
    <>
      <ExpensesChart expenses={expensesFilters} />
      <ul className="expenses-list">
        {expensesFilters.map((expense) => (
          <ExpenseItem
            key={`ExpenseItem${expense.id}`}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
