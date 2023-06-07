import './App.css';

function App() {
  function Card(props) {
    return (
      <div style={{border:`5px solid ${props.blackborder}`}}>
        {props.children}
      </div>
    )
  }
  function Avatar() {
    return (
      <div>
        <img src='https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8fHww&w=1000&q=80' alt='Batman'
        style={{width:"200px"}}
        />
        <p>Batman</p>
      </div>
    )
  }
  return (
    <div className="App">
      <Card blackborder="black" >
        <Avatar  />
      </Card>
    
    </div>
  );
}

export default App;
