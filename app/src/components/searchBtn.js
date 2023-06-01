const SearchBtn = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App-Button">
      <button onClick={handleClick} type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
