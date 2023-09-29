import ExpenseItem from './components/ExpenseItem';

function App() {
  // // forma imperativa (antes de react)
  // const parag = document.createElement('p');
  // parag.textContent = 'This is also visible!!!';
  // document.getElementById('root').append(parag);

  // forma DECLARATIVA
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <p>This is also visible!</p>
    </div>
  );
}

export default App;
