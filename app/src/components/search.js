import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    // alert(document.getElementById("zipSearch").value);
    event.preventDefault();
    navigate("/current-weather"); // -------------------------------------- Well have to be removed at some point
  };

  //Requires Form methode="POST"
  // '/searchlocaion' refers to server/routes/api/weatherApi.js
  return (
    <div>
      <form method="POST" action="/searchLocation">
        <div className="App-Search">
          <input id="zipSearch" type="text" placeholder="Zip Code" />
        </div>
        <div className="App-Button">
          <button onClick={handleClick} type="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
