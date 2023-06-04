const Search = () => {
  //Requires Form methode="POST"
  // '/searchlocaion' refers to server/routes/api/weatherApi.js
  return (
    <div>
      <form method="POST" action="/searchLocation">
        <div className="App-Search">
          <input id="zipSearch" type="text" placeholder="Zip Code" />
        </div>
        <div className="App-Button">
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
