import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

function Expense(probs) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={probs.expenses[0].title}
        amount={probs.expenses[0].amount}
        date={probs.expenses[0].date}
      />
      <ExpenseItem
        title={probs.expenses[1].title}
        amount={probs.expenses[1].amount}
        date={probs.expenses[1].date}
      />
      <ExpenseItem
        title={probs.expenses[2].title}
        amount={probs.expenses[2].amount}
        date={probs.expenses[2].date}
      />
      <ExpenseItem
        title={probs.expenses[3].title}
        amount={probs.expenses[3].amount}
        date={probs.expenses[3].date}
      />
    </div>
  );
}

export default Expense;
