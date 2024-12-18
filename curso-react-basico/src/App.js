import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Rafael"
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>alterando o JSX</h1>
      <p>Olá, {newName}</p>
      <p>soma: {sum(1,2)}</p>
      <img src={url} alt="minha Imagem" />
    </div>
  );
}

export default App;
