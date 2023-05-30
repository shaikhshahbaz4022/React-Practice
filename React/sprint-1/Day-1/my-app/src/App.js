import Navbar from './components/navbar';
import './App.css';
import { Counter } from './components/counter';
import MyButton from './components/MyButton';
import Avatar from './components/avatar';

const users = [
  {
    name: "shaikh shahbaz",
    src: "https://avatars.githubusercontent.com/u/119395145?s=400&u=a0c4aa393ce6756f29792c3322d1da032936af9a&v=4",
    rounded: true
  },
  {
    name: "john Bhai",
    src: "https://us.123rf.com/450wm/metelsky/metelsky1903/metelsky190300010/124605020-male-avatar-with-realistic-face-man-in-the-suit-shirt-and-necktie-businessman-head-and-shoulder.jpg?ver=6",
    rounded: true
  },
  {
    name: "Chunnu Bro",
    src: "https://us.123rf.com/450wm/metelsky/metelsky1903/metelsky190300010/124605020-male-avatar-with-realistic-face-man-in-the-suit-shirt-and-necktie-businessman-head-and-shoulder.jpg?ver=6",
    rounded: true
  }

]
const renderData = users.map((user) => (
  <Avatar src={user.src} name={user.name} rounded={user.rounded} />
))


function App() {

  const click1 = () => {
    alert("btn-1 Clicked")
  }
  const click2 = () => {
    alert("btn-2 Clicked")
  }
  const click3 = () => {
    alert("btn-3 Clicked")
  }


  return (
    <div className="App">

      {renderData}

      <Navbar />
      <Counter />
      <MyButton ButtonText="hello 1" btnColor="green" handleOnclicked={click1} />

      <Avatar src="https://avatars.githubusercontent.com/u/119395145?s=400&u=a0c4aa393ce6756f29792c3322d1da032936af9a&v=4" name="Shaikh Shahbaz" rounded={true} />
      <Avatar src="https://us.123rf.com/450wm/metelsky/metelsky1903/metelsky190300010/124605020-male-avatar-with-realistic-face-man-in-the-suit-shirt-and-necktie-businessman-head-and-shoulder.jpg?ver=6" name="jackey temp" rounded={false} />

      <MyButton ButtonText="hello 2" btnColor="pink" handleOnclicked={click2} />
      <MyButton ButtonText="hello 3" btnColor="lightblue" handleOnclicked={click3} />

    </div>
  );
}

export default App;
