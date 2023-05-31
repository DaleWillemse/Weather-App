import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header"> Weather Forecast</header>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <div className="App-Search">
          <input type="text" placeholder="Zip Code" />
        </div>
        <div className="App-Button">
          <button type="button">Search</button>
        </div>
      </div>
    </body>
  );
}

export default App;
