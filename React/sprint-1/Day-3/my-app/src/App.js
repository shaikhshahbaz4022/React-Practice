import AllButton from './components/AllButton';
import MyButton from './components/button';
import { useState } from 'react';
import './App.css';

//all Counter are working simultaneously Due to This Code
function App() {
  const [Count, setCount] = useState(0)

  const handleCount = () => {
      return setCount(Count+1)
  }
  const Reduce = () => {
    return setCount(Count-1)
  }
  return (
    <div>
      {/* <MyButton/> 
      <MyButton/>
      <MyButton/>
      <MyButton/> */}
      <AllButton count={Count} onclick={handleCount} reduce={Reduce} />
      <AllButton count={Count} onclick={handleCount} reduce={Reduce} />
      <AllButton count={Count} onclick={handleCount} reduce={Reduce} />



    </div>
  )


}

export default App;
