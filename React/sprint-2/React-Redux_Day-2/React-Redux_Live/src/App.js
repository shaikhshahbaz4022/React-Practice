import './App.css';
import Todos from './components/Todos';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
