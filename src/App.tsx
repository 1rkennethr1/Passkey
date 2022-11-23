import './App.css';
import ColorSequence from './components/ColorSequence';
import TicTacToe from './components/TicTacToe';
import Patuti from './components/Patuti';
import RandomRoll from './components/RandomRoll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <TicTacToe></TicTacToe> */}
      {/* <Patuti/> */}
      <RandomRoll/>
      </header>
    </div>
  );
}

export default App;
