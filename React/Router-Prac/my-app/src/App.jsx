import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from './Pages/Home/Home';

import Update from './Pages/Update/Update';
import AddFun from './Pages/Add/add';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/add">ADD</Link>
          <Link to="/update/:todoID">Update</Link>

        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddFun />} />
          <Route path='/update/:todoID' element={<Update />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
