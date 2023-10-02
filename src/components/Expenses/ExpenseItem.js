import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // useState registra una variable como state para el componente
  // registra una instancia del componente, cada vez qye
  // el componente es llamado, se crea una nueva instancia del State
  // por eso al hacer click en uno no afecta a otro componente
  // State es una funcion POR COMPONENTE LLAMADO
  // se usa setTitle para reevaluar el componente con una nuevo valor para la variable
  // React no reinicializa el State...por eso el valor cambia! aun al recargarse nuevamente
  // al componente

  const [title, setTitle] = useState(props.title);
  console.log('Expense Item reevaluated by React');

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  // USO DE PARAMETROS
  // PROPS ES EL OBJETO QUE LLEVA TODOS LOS CAMPOS

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
