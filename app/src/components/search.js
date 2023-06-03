import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    // alert(document.getElementById("zipSearch").value);
    event.preventDefault();
    navigate("/WeatherPage");
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
