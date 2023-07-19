
import './App.css';
import { ThemeContext } from './Context/ThemeContextProvider';
import { useContext } from 'react';
import Button from './components/Buttom';
function App() {
  const { Theme, ToggleTheme } = useContext(ThemeContext)


  return (
    <div className="App"

      style={{
        backgroundColor: Theme === "dark" ? "black" : "white",
        color: Theme === "dark" ? "white" : "black",
        padding: "50px"
      }}>
      <h1>{Theme === "dark" ? "Dark Mode" : "Light Mode"}</h1>
      <h1>{Theme}</h1>
      <Button text="Click here" onclick={ToggleTheme} />
    </div>
  );
}

export default App;
