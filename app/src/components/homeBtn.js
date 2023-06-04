// Home button is a link to the home page
import { useNavigate } from "react-router-dom";

const HomeBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="App-Button">
        <button onClick={handleClick} type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeBtn;
