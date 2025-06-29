import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const btn1 = useRef();
  const chr = useRef()

  const handleClick = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <input type='text'></input>
      <button ref={btn1} onClick={handleClick}> Click </button>
    </div>
  );
}

export default App;
