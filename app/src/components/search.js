const Search = () => {
  const handleClick = () => {
    alert(document.getElementById("zipSearch").value);
  };
  return (
    <div>
      <div className="App-Search">
        <input id="zipSearch" type="text" placeholder="Zip Code" />
      </div>
      <div className="App-Button">
        <button onClick={handleClick} type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
