import './ExpenseItem.css';

function ExpenseItem(props) {
  // USO DE PARAMETROS
  // PROPS ES EL OBJETO QUE LLEVA TODOS LOS CAMPOS

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className="expense-item">
      {/* OJO AL SER UN OBJETO FECHA SE DEBE CONVERTIR A ISOString */}
      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
