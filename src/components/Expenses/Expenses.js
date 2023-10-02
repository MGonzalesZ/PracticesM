import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // para un state derivado o computado, basta con usar una variable adicional
  let filterInfoText = '2019,2021 & 2022';

  if (filteredYear === '2019') {
    filterInfoText = '2020,2021 & 2022';
  } else if (filteredYear === '2021') {
    filterInfoText = '2019,2020 & 2022';
  } else {
    filterInfoText = '2019,2020 & 2021';
  }
  // ya no es necesario usar otro State para un State derivado o computado
  //const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data for years {filterInfoText} is hidden</p>
      {props.items.map((elemento) => {
        return (
          <ExpenseItem
            key={elemento.id}
            title={elemento.title}
            amount={elemento.amount}
            date={elemento.date}
          />
        );
      })}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
