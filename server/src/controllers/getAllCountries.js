const axios = require("axios");
const { Country, Activity } = require("../db");

async function getAllCountries(req, res) {
  try {
    const { data } = await axios.get("http://localhost:5000/countries");
    const countriesItem = data?.map((c) => ({
      name: c.name.official,
      flagImage: c.flags.png,
      continent: c.continents?.join(""),
      capital: c.capital?.join(""),
      area: c.area,
      subregion: c.subregion,
      population: c.population,
    }));

    countriesItem.forEach(async (c) => {
      await Country.findOrCreate({
        where: { name: c.name },
        defaults: {
          flagImage: c.flagImage,
          continent: c.continent,
          capital: c.capital,
          area: c.area,
          subregion: c.subregion,
          population: c.population,
        },
      });
    });
    const allCountries = await Country
      .findAll
      // include: {
      //   model: Activity,
      //   attributes: ["id", "name", "difficulty", "duration", "season"],
      // },
      ();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = getAllCountries;
