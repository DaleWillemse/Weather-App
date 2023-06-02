import "./App.css";
import Search from "./components/search";
import SearchBtn from "./components/searchBtn";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header"> Weather Forecast</header>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
        <SearchBtn />
      </div>
    </body>
  );
}

export default App;


