import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary by Linda
      </header>
      <h2>What would you like to look up?</h2>
      <Dictionary />

      <footer className="App-footer">
        <p>
          This Application was coded by
          <a href="https://github.com/lindath0905">Linda Thurner</a> and is
          open-sourced on
          <a href="https://github.com/">GitHub</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
