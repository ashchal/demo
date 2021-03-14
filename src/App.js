import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://twitter.com/ashchalstha"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashchal Shrestha
        </a>
      </header>
    </div>
  );
}

export default App;
