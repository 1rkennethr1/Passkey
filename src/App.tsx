import './App.css';
import ColorSequence from './components/Color Sequence/ColorSequence';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Patuti from './components/Statemanagement/Patuti';
import RandomRoll from './components/Random Rolle/RandomRoll';
import StateManagement from './components/Statemanagement/StateManagement'
import context from './components/context/context';
import StateContext from './components/context/context';
import RestExample from './components/Notes/RestExample';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <TicTacToe></TicTacToe> */}
      {/* <Patuti/> */}
      {/* <RandomRoll/> */}
      {/* <StateContext><StateManagement/></StateContext> */}
      <RestExample/>
      </header>
    </div>
  );
}

export default App;
