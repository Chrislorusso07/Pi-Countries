require("dotenv").config();
const { Sequelize } = require("sequelize");
const countryModel = require("./models/Country");
const activityModel = require("./models/Activity");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
  }
);

countryModel(sequelize);
activityModel(sequelize);

const { Country, Activity } = sequelize.models;

// Definición de relaciones
Country.belongsToMany(Activity, { through: "ActivityForCountries" });
Activity.belongsToMany(Country, { through: "ActivityForCountries" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
