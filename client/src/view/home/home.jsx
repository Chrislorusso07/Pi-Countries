import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards/cardsContainer";
import { getCountries, setPage, getActivities } from "../../redux/actions";
import "./home.css";

const Home = () => {
  const countries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());

    dispatch(getActivities());
  }, [dispatch]);

  const perPage = 10;
  const totalPages = Math.ceil(countries.length / perPage);

  // This function is used to get the current page of countries.
  const getCurrentCountries = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return countries.slice(startIndex, endIndex);
  };

  // Función para cambiar a la página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  // Función para cambiar a la página siguiente
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <div className="eltodo">
      <Cards countries={getCurrentCountries()} />
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {currentPage}/{totalPages}
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(countries.length / perPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
