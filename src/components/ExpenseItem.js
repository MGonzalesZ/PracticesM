import './ExpenseItem.css';

function ExpenseItem(props) {
  // USO DE PARAMETROS
  // PROPS ES EL OBJETO QUE LLEVA TODOS LOS CAMPOS
  return (
    <div className="expense-item">
      {/* OJO AL SER UN OBJETO FECHA SE DEBE CONVERTIR A ISOString */}
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
