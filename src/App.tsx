import './App.css';
import { Button } from '@mui/material';
import PMatch from './components/PMatch';

const clickHandlerTwo = () =>{
  alert("Enter PIN")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Enter PIN to Validate!</h2>
      <PMatch></PMatch>
      </header>
    </div>
  );
}

export default App;
