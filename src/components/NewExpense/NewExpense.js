import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  const ocultarForm = () => {
    setShowForm(false);
  };
  const mostrarForm = () => {
    setShowForm(true);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={mostrarForm}>ADD EXPENSE</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={ocultarForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
