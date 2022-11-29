import './App.css';
import ColorSequence from './components/ColorSequence';
import TicTacToe from './components/TicTacToe';
import Patuti from './components/Patuti';
import RandomRoll from './components/RandomRoll';
import StateManagement from './components/StateManagement';
import context from './components/context/context';
import StateContext from './components/context/context';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <TicTacToe></TicTacToe> */}
      {/* <Patuti/> */}
      {/* <RandomRoll/> */}
      <StateContext><StateManagement/></StateContext>
      {/* </header> */}
    </div>
  );
}

export default App;
