import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_PAGE = "SET_PAGE";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER";
export const CLEANER = "CLEANER";
export const ORDER_BY_NUMBER = "ORDER_BY_NUMBER";
export const CONTINENTES = "CONTINENTES";
export const GET_ACTIVITY = "GET_ACTIVITY";
// export const ACTIVITY_FILTER = "ACTIVITY_FILTER";

export const alphabeticOrder = (value) => ({
  type: ALPHABETIC_ORDER,
  payload: value,
});

export const filterCleaner = () => {
  return { type: CLEANER, payload: null };
};

export const orderByNumber = (value) => ({
  type: ORDER_BY_NUMBER,
  payload: value,
});

export const continentes = (value) => {
  return {
    type: CONTINENTES,
    payload: value,
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/activities");

      dispatch({
        type: GET_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const activityFilter = (value) => {
//   return { type: ACTIVITY_FILTER, payload: value };
// };

export const getCountries = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/countries");

    const apiCountries = data;
    dispatch({ type: GET_COUNTRIES, payload: apiCountries });
  };
};

export const setPage = (pageNumber) => {
  return { type: SET_PAGE, payload: pageNumber };
};

export const foundCountry = (countryFound) => {
  return { type: SEARCH_COUNTRY, payload: countryFound };
};
