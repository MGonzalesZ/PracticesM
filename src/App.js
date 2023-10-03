import React, { useState } from 'react';
import ExpenseFormCondition from './components/NewExpense/ExpenseFormCondition';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    // una opcion seria esta...pero se requiere hacer uso de state previo!
    //setExpenses([expense, ...expenses]);
    // por lo que lo correcto es:
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // // forma imperativa (antes de react)
  // const parag = document.createElement('p');
  // parag.textContent = 'This is also visible!!!';
  // document.getElementById('root').append(parag);

  // forma DECLARATIVA
  return (
    <div>
      <h2>Let's get started!</h2>

      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <ExpenseFormCondition onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
