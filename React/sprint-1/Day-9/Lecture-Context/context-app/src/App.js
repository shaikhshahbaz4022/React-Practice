
import './App.css';
import { ThemeContext } from './Context/ThemeContextProvider';
import { useContext } from 'react';
function App() {
  const {Theme , ToggleTheme} = useContext(ThemeContext)
  return (
    <div className="App">
      <h1>{Theme}</h1>
      <button onClick={ToggleTheme}>Click Here {Theme==="dark" ? "light" : "dark"}</button>
    </div>
  );
}

export default App;
