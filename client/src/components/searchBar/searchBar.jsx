import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foundCountry, getCountries } from "../../redux/actions";
import "./searchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    handleChange(event);
  }, [search]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleClick = () => {
    dispatch(foundCountry(search));
  };

  if (search === "") {
    dispatch(getCountries());
  }

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(foundCountry(search));
    }
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Encuentra tu país..."
        value={search}
        onKeyPress={enterHandler}
      ></input>
      <button className="busqueda" onClick={handleClick}>
        🔍
      </button>
    </div>
  );
};
export default SearchBar;
