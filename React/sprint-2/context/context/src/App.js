
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/authContext';

function App() {
  const val = useContext(AuthContext)
  console.log(val);
  return (
    <div className="App">
      {val}
    </div>
  );
}

export default App;
