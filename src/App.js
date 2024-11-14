import './App.css';
import TodoList from './TodoList';
import rabbit from './rabbit.png';
import CountdownTimer from './CountdownTimer';
import Lowfi from './Lowfi.js';

function App() {
  return (
    <div className="App">
      <h1>bunny tasks</h1>
      <img src={rabbit} className='bunny'></img>
      <div className='functionality'>
      <CountdownTimer />
      <TodoList />
      <Lowfi />
      </div>
    </div>
  );
}

export default App;
