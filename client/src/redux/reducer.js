import {
  GET_COUNTRIES,
  SET_PAGE,
  SEARCH_COUNTRY,
  ALPHABETIC_ORDER,
  CLEANER,
  ORDER_BY_NUMBER,
  CONTINENTES,
  GET_ACTIVITY,
  // ACTIVITY_FILTER,
} from "./actions";

const initialState = {
  countriesBackUp: [],
  allCountries: [],
  current: 1,
  activities: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: payload, countriesBackUp: payload };

    case SET_PAGE:
      return { ...state, current: payload };

    case SEARCH_COUNTRY:
      if (payload === "") return { ...state };
      const copiaCountry = [...state.countriesBackUp];
      const found = copiaCountry?.filter((country) => {
        return country.name.toLowerCase().includes(payload.toLowerCase());
      });

      return { ...state, allCountries: found };

    case ALPHABETIC_ORDER:
      const copy3 = [...state.allCountries];
      const sortedCountries = copy3.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (payload === "A-Z") {
          return nameA.localeCompare(nameB);
        } else if (payload === "Z-A") {
          return nameB.localeCompare(nameA);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allCountries: sortedCountries,
      };

    case CLEANER:
      return { ...state, allCountries: state.countriesBackUp };

    case ORDER_BY_NUMBER:
      const copy2 = [...state.allCountries];
      const countriesSortedByNumber = copy2.sort((a, b) => {
        const valueA = a.population;
        const valueB = b.population;
        if (payload === ">") {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
      return {
        ...state,
        allCountries: countriesSortedByNumber,
      };

    case CONTINENTES:
      const copy6 = [...state.countriesBackUp];
      const filterByContinent = copy6.filter(
        (con) => con.continent === payload
      );
      return { ...state, allCountries: filterByContinent };

    case GET_ACTIVITY:
      return { ...state, activities: payload };

    // case ACTIVITY_FILTER: {
    //   const selectedActivity = payload;
    //   if (selectedActivity === "default") {
    //     return {
    //       ...state,
    //     };
    //   } else {
    //     const filteredCountries = [...state.countriesBackUp].filter((country) =>
    //       country.Activities.map((a) => a.name === selectedActivity)
    //     );
    //     return {
    //       ...state,
    //       allCountries:
    //         filteredCountries.length === 0
    //           ? countriesBackUp
    //           : filteredCountries,
    //     };
    //   }
    // }

    default:
      return { ...state };
  }
};

export default reducer;
