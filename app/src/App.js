import "./App.css";
import Search from "./components/search";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header"> Weather Forecast</header>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
      </div>
    </body>
  );
}

export default App;
