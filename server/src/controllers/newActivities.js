const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const newActivity = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  if (!name || !difficulty || !season || !country) {
    throw Error(
      "Missing data. Please provide a valid name, difficulty, season and country"
    );
  }

  try {
    const postActivity = await Activity.create({
      name,
      difficulty,
      duration: duration || "Unknown",
      season,
    });
    country.forEach(async (el) => {
      let country = await Country.findOne({ where: { name: el } });
      await postActivity.addCountry(country);
    });
    if (!country.length)
      throw Error(`Could not find the country named: ${country}`);

    res.status(201).send("Activity created successfully");
  } catch (error) {
    console.error(error);
    throw Error("Could not create activity");
  }
};

module.exports = newActivity;
