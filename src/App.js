import logo from './logo.svg';
import './App.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('itemId');

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
        {myParam ? <h1>Query string received</h1>: null}
      </header>
    </div>
  );
}

export default App;
