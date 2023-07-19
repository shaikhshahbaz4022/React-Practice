
import './App.css';
import { ThemeContext } from './Context/ThemeContextProvider';
import { useContext } from 'react';
import Button from './components/Buttom';
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  const { Theme, ToggleTheme } = useContext(ThemeContext)


  return (
    <div className="App"

      style={{
        backgroundColor: Theme === "dark" ? "black" : "white",
        color: Theme === "dark" ? "white" : "black",
        padding: "50px"
      }}>
      <Navbar/>
      <h1>{Theme === "dark" ? "Dark Mode" : "Light Mode"}</h1>

      <Button text="Click here" onclick={ToggleTheme} />
      <br />
      <br />
      <hr />
      <Login />
    </div>
  );
}

export default App;
