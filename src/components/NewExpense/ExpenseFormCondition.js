import React, { useState } from 'react';
import NewExpense from './NewExpense';

const ExpenseFormCondition = (props) => {
  const [showForm, setShowForm] = useState(false);

  const changeForm = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  const saveExpense = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  if (showForm === true) {
    return (
      <div className="new-expense">
        <NewExpense onSaveExpenseData={saveExpense} onSubmitted={changeForm} />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={changeForm}>ADD EXPENSE</button>
      </div>
    );
  }
};

export default ExpenseFormCondition;
