import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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

  // // forma imperativa (antes de react)
  // const parag = document.createElement('p');
  // parag.textContent = 'This is also visible!!!';
  // document.getElementById('root').append(parag);

  // forma DECLARATIVA
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* ALTERNATIVA
      <ExpenseItem expense={expenses[0]}></ExpenseItem> */}
      <Expenses items={expenses}></Expenses>
    </div>
  );

  // como seria sin usar JSX, usando el objeto REACT
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
