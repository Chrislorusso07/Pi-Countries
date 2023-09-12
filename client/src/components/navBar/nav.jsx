import { Link } from "react-router-dom";
import "./nav.css";
import SearchBar from "../searchBar/searchBar";
import {
  alphabeticOrder,
  filterCleaner,
  orderByNumber,
  continentes,
  // activityFilter,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  const alphabeticOrderr = (event) => {
    const value = event.target.value;
    if (value === "A-Z") {
      dispatch(alphabeticOrder("A-Z"));
    } else {
      dispatch(alphabeticOrder("Z-A"));
    }
  };

  const clean = () => {
    dispatch(filterCleaner());
  };

  const numberOrder = (event) => {
    const value = event.target.value;
    if (value === "<") {
      dispatch(orderByNumber(">"));
    } else {
      dispatch(orderByNumber("<"));
    }
  };

  const continentFilter = (event) => {
    const value = event.target.value;
    dispatch(continentes(value));
  };

  // const handlerFilterActivity = (e) => {
  //   const selectedValue = e.target.value;
  //   dispatch(activityFilter(selectedValue));
  // };

  return (
    <div className="horizontal">
      <Link to={"/home"}>HOME</Link>
      <SearchBar></SearchBar>
      <Link to={"/create"}>FORM</Link>
      <Link to={"/"}>SALIR</Link>
      <button className="reset" onClick={clean}>
        RESET
      </button>
      <select className="az" onChange={alphabeticOrderr}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select className="pop" onChange={numberOrder}>
        <option value=">">POPULATION {">"} POPULATION </option>
        <option value="<">POPULATION {"<"} POPULATION </option>
      </select>
      <select className="cont" onChange={continentFilter}>
        <option value="Africa">África</option>
        <option value="North America">America del Norte</option>
        <option value="South America">América del Sur</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>
      {/* <select className="filter" onChange={handlerFilterActivity}>
        <option value="default">Filter by activity</option>
        {activities?.map((activity, index) => (
          <option key={index} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default NavBar;
