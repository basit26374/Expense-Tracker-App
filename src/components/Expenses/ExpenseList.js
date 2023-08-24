import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (probs) => {
  if (probs.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expense.</h2>;
  }

  return (
    <ul className="expense-list">
      {probs.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
